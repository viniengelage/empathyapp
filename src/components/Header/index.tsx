import { useAuth } from 'hooks/auth';
import { useEffect, useState } from 'react';
import { api } from 'services/api';
import { useTheme } from 'styled-components';
import { Buffer } from 'buffer';

import emptyImage from 'assets/empty-profile-image.png';

import { AxiosError } from 'axios';
import { AvatarImage, HeaderView, ProfileName } from './styles';

export function Header() {
  const { colors } = useTheme();
  const { user } = useAuth();
  return (
    <HeaderView>
      {user && user.avatar_url ? (
        <AvatarImage source={{ uri: user.avatar_url }} />
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
