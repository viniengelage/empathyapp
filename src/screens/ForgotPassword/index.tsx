import React, { useState } from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Modal,
} from 'react-native';

import { Button } from '../../components/Buttons/Default';
import { Container, InputEmail, ModalView, Paragraph, Picture, PictureModal, TextCard,  } from './styles';

const ForgotPassword = () => {
  const [value, setValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = async () => {
    setModalVisible(true);
  };
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Container>
        <Picture source={require('./img/cadeado.png')} />
        <Paragraph>Esqueceu a senha?</Paragraph>
        <TextCard>
          Para que você consiga voltar a embarcar nessa jornada de
          autoconhecimento digite seu email nos campos abaixo para enviarmos um
          link para redefinir sua senha!
        </TextCard>

        <InputEmail
          name="email"
          placeholder="E-mail"
          icon="at-outline"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Button title="Enviar email" onPress={handleSubmit} />
      </Container>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ModalView>
          <View>
            <PictureModal
              style={styles.imageModal}
              source={require('./img/email.png')}
            />
            <ParagraphModal>Email enviado!</ParagraphModal>
            <TextCard>
              O email para redefinição de senha foi enviado, entre no link para
              definir uma nova senha e voltar a ter acesso a sua conta.
            </TextCard>
          </View>
          <Button title="Voltar" onPress={() => alert('Ir para home')} />
        </ModalView>
      </Modal>
    </ScrollView>
  );
};


export default ForgotPassword;
