import { useAuth } from 'hooks/auth';
import { useEffect, useState } from 'react';
import { api } from 'services/api';
import { useTheme } from 'styled-components';
import { Buffer } from 'buffer';

import emptyImage from 'assets/empty-profile-image.png';

import { AvatarImage, HeaderView, ProfileName } from './styles';

export function Header() {
  const { colors } = useTheme();
  const { user } = useAuth();

  const [userAvatar, setUserAvatar] = useState<string>('');

  const handleImage = async () => {
    try {
      const response = await api.get('users/me/avatar', {
        responseType: 'arraybuffer',
      });

      const image = Buffer.from(response.data, 'binary').toString('base64');

      setUserAvatar(`data:${response.headers['content-type']};base64,${image}`);
    } catch (error) {
      console.log('A error?', error);
      setUserAvatar('');
    }
  };

  useEffect(() => {
    if (user) {
      handleImage();
    }
  }, [user]);
  return (
    <HeaderView>
      {userAvatar ? (
        <AvatarImage source={{ uri: userAvatar }} />
      ) : (
        <AvatarImage source={emptyImage} />
      )}
      <ProfileName>
        Olá,{' '}
        <ProfileName style={{ color: colors.primary }}>
          {user && user.name.split(' ')[0]}
        </ProfileName>
      </ProfileName>
    </HeaderView>
  );
}
