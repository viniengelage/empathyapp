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
  login(data: ILoginProps): Promise<void>;
  user: IUserProps;
  isLoading: boolean;
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
      console.log(error);
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

  useEffect(() => {
    handleGetUser();
  }, [handleGetUser]);

  const contextValues = useMemo<IContextProps>(
    () => ({
      login: handleLogin,
      isLoading: loading,
      user,
    }),
    [handleLogin, loading, user],
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
