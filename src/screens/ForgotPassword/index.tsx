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

const ForgotPassword = () => {
  const [value, setValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = async () => {
    setModalVisible(true);
  };
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.container}>
        <Image style={styles.image} source={require('./img/cadeado.png')} />
        <Text style={styles.paragraph}>Esqueceu a senha?</Text>
        <Text style={styles.textCard}>
          Para que você consiga voltar a embarcar nessa jornada de
          autoconhecimento digite seu email nos campos abaixo para enviarmos um
          link para redefinir sua senha!
        </Text>

        <Input
          name="email"
          placeholder="E-mail"
          icon="at-outline"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Button title="Enviar email" onPress={handleSubmit} />
      </View>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View>
            <Image
              style={styles.imageModal}
              source={require('./img/email.png')}
            />
            <Text style={styles.paragraphModal}>Email enviado!</Text>
            <Text style={styles.textCard}>
              O email para redefinição de senha foi enviado, entre no link para
              definir uma nova senha e voltar a ter acesso a sua conta.
            </Text>
          </View>
          <Button title="Voltar" onPress={() => alert('Ir para home')} />
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#FEFEFE',
    alignItems: 'center',
    padding: 8,
  },
  paragraph: {
    color: '#440A67',
    fontSize: 36,
    width: 188,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  image: {
    width: 64,
    height: 64,
    marginTop: 32,
  },
  textCard: {
    color: '#252627',
    fontSize: 18,
    lineHeight: 25,
    fontWeight: '400',
    textAlign: 'left',
  },
  input: {
    marginTop: 20,
    marginBottom: 100,
    borderWidth: 1,
    borderRadius: 3,
  },

  // styles Modal
  modalView: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 35,
  },
  paragraphModal: {
    color: '#440A67',
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 40,
  },
  imageModal: {
    width: 312,
    height: 312,
  },
});

export default ForgotPassword;
