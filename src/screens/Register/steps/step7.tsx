import React from 'react';

import register7image from 'assets/register7.png';

import { Button } from 'components/Buttons/Default';
import { View } from 'react-native';
import { ParamListBase } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { Container, Description, FinalTitle, Image } from '../styles';

export function Step7({
  navigation,
  route,
}: StackScreenProps<ParamListBase, 'Step7'>) {
  return (
    <Container>
      <Image source={register7image} />
      <FinalTitle>Agora sim!</FinalTitle>

      <Description style={{ marginTop: 16 }}>
        Seja bem vindo ao AppEmpatia, esperamos que possamos ajudar em sua
        jornada para uma melhor perspectiva de vida!
      </Description>

      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'flex-end',
          marginBottom: 60,
        }}
      >
        <Button
          title="Continuar"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </Container>
  );
}
