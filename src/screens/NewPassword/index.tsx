import React, {useState} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Modal,
} from 'react-native';

import {Button} from '../../components/Buttons/Default';
import { Container, Content, Paragraph, Picture, TextCard } from './styles';

const NewPassword = () => {
  const [value, setValue] = useState('');

  const handleSubmit = async () => {};
  return (
    <Container>
      <Content>
        <Picture source={require('./img/senha.png')} />
        <Paragraph>Nova senha</Paragraph>
        <TextCard>
          Para que continuar, digite a sua nova senha e confirme.
        </TextCard>
        <Password
              name="password"
              placeholder="Senha"
              icon="lock-closed-outline"
              secureTextEntry
              
            />
      </Content>
      <Button title="Confirmar" onPress={handleSubmit} />
    </Container>
  );
};



export default NewPassword;
