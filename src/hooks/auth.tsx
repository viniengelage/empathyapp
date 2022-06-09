import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { api } from 'services/api';
import { IUserProps } from 'types/user';

interface IContextReference {
  children: JSX.Element | JSX.Element[];
}

interface ILoginProps {
  email: string;
  password: string;
}

interface IContextProps {
  user: IUserProps;
  login(data: ILoginProps): Promise<void>;
  isLoading: boolean;
  logout(): void;
  getUser(): Promise<void>;
}

const Auth = createContext<IContextProps>({} as IContextProps);

const AuthProvider = ({ children }: IContextReference) => {
  const [user, setUser] = useState<IUserProps>({} as IUserProps);
  const [loading, setLoading] = useState<boolean>(true);

  const handleLogin = useCallback(async ({ email, password }: ILoginProps) => {
    try {
      const {
        data: { token },
      } = await api.post('/auth/login', {
        email,
        password,
      });

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      await AsyncStorage.setItem('@access_token', token);

      const { data } = await api.get('/users/me');

      setUser(data);
    } catch (error) {
      console.log(error.response);
    }
  }, []);

  // useEffect(() => {
  //   AsyncStorage.removeItem('@access_token');
  // }, []);

  const handleGetUser = useCallback(async () => {
    const storagedToken = await AsyncStorage.getItem('@access_token');

    if (!storagedToken) {
      setLoading(false);
      return;
    }

    api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`;

    const { data } = await api.get('/users/me');

    setUser(data);
    setLoading(false);
  }, []);

  const handleLogout = useCallback(async () => {
    await AsyncStorage.removeItem('@access_token');
    setUser({} as IUserProps);
  }, []);

  useEffect(() => {
    handleGetUser();
  }, [handleGetUser]);

  const contextValues = useMemo<IContextProps>(
    () => ({
      user,
      isLoading: loading,
      login: handleLogin,
      logout: handleLogout,
      getUser: handleGetUser,
    }),
    [handleLogin, handleLogout, loading, user, handleGetUser],
  );

  return <Auth.Provider value={contextValues}>{children}</Auth.Provider>;
};

function useAuth() {
  const context = useContext(Auth);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
