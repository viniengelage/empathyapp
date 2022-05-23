import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

interface Props extends RectButtonProps {
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
      onPress={() => isActive && onPress && onPress(true)}
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
