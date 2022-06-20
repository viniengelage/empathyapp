import React from 'react';

import { Container } from 'global/styles/global';
import { useAuth } from 'hooks/auth';

import { useTheme } from 'styled-components';
import { generateBoxShadowStyle } from 'utils/generateBoxShadow';
import { Header } from 'components/Header';
import roadImage from 'assets/road.png';
import { Points, RoadImage, Section } from './styles';

export function Home() {
  const { colors } = useTheme();
  const { user } = useAuth();

  return (
    <Container>
      <Header />

      <Section
        style={generateBoxShadowStyle({
          xOffset: -2,
          yOffset: 4,
          shadowColorIos: '#171717',
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 4,
          shadowColorAndroid: '#171717',
        })}
      >
        <Points>
          Você possui
          <Points style={{ color: colors.button }}> {user.points} </Points>
          flores em seu caminho
        </Points>

        <RoadImage source={roadImage} />
      </Section>
    </Container>
  );
}
