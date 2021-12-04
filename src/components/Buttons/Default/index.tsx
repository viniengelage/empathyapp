import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

const Button = ({ title, loading = false, ...rest }: Props) => {
  const { colors } = useTheme();

  return (
    <Container isLoading={loading} {...rest}>
      {loading ? (
        <ActivityIndicator animating color={colors.background} size={32} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
};

export default Button;
