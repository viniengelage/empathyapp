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

const NewPassword = () => {
  const [value, setValue] = useState('');

  const handleSubmit = async () => {};
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={require('./img/senha.png')} />
        <Text style={styles.paragraph}>Nova senha</Text>
        <Text style={styles.textCard}>
          Para que continuar, digite a sua nova senha e confirme.
        </Text>
        <Input
              name="password"
              placeholder="Senha"
              icon="lock-closed-outline"
              secureTextEntry
              
            />
      </View>
      <Button title="Confirmar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#FEFEFE',
    alignItems: 'center',
    padding: 30,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paragraph: {
    color: '#440A67',
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  image: {
    width: 64,
    height: 64,
  },
  textCard: {
    color: '#252627',
    fontSize: 18,
    lineHeight: 25,
    fontWeight: '400',
    textAlign: 'left',
    width: 332,
  },
  input: {
    marginTop: 20,
    marginBottom: 100,
    borderWidth: 1,
    borderRadius: 3,
  },
});

export default NewPassword;
