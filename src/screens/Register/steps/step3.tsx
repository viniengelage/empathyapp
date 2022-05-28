import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { Button } from 'components/Buttons/Default';
import { api } from 'services/api';
import { IUserProps } from 'types/user';
import register4image from 'assets/register3.png';

import { Bold, Container, Description, Image } from '../styles';

type Step3ScreenProp = StackNavigationProp<any, 'Step3'>;

export function Step3() {
  const [user, setUser] = useState({} as IUserProps);

  const { navigate } = useNavigation<Step3ScreenProp>();

  useEffect(() => {
    api.get('/users/me').then(({ data }) => setUser(data));
  }, []);

  return (
    <Container>
      <Description>
        <Bold>Prazer, {user.name}! </Bold>
        Para finalizar, gostariamos de saber um pouco mais do que você mais
        gosta, vamos lá?
      </Description>

      <Image
        style={{
          flex: 1,
          height: undefined,
          width: undefined,
          alignSelf: 'stretch',
        }}
        source={register4image}
        resizeMode="contain"
      />

      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'flex-end',
          marginBottom: 64,
        }}
      >
        <Button title="Continuar" onPress={() => navigate('Step4')} />
      </View>
    </Container>
  );
}
