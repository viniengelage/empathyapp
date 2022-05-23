import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  isActive?: boolean;
}

export const Button = ({
  title,
  loading = false,
  isActive = true,
  onPress,
  ...rest
}: Props) => {
  const { colors } = useTheme();

  return (
    <Container
      isLoading={loading}
      isActive={isActive}
      onPress={event => isActive && onPress && onPress(event)}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator animating color={colors.background} size={32} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
};
