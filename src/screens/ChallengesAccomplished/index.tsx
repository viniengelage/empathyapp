import React, {useState} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Pressable,
} from 'react-native';

import {Button} from '../../components/Buttons/Default';
import { ButtonArea, ButtonClose, ButtonImage, Card, CenteredView, CloseImage, Container, LineText, ModalView, Paragraph, Picture, TextArea, TextButton, TextCard, TextModal } from './styles';



interface cardProps {
  title: string;
  text: string;
}

const Challenges = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [textModal, setTextModal] = useState<cardProps>({});
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Container>
        <Picture source={require('./foguetinho.png')} />
        <Paragraph>Desafios Realizados</Paragraph>
          <Card
            onPress={() => {
              setTextModal(e);
              setModalVisible(true);
            }}>
            <TextArea>
              <LineText></LineText>
              <TextCard>{e.title}</TextCard>
            </TextArea>
            <ButtonArea>
              <TextButton>Ver desafio</TextButton>
              <ButtonImage
                source={require('./button.png')}
              />
            </ButtonArea>
          </Card>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <CenteredView>
              <ModalView>
                <ButtonClose
                  onPress={() => setModalVisible(!modalVisible)}>
                  <CloseImage
                    source={require('./close.png')}
                  />
                </ButtonClose>

                <TextArea>
                  <LineText></LineText>
                  <TextCard>{textModal.title}</TextCard>
                </TextArea>
                <TextModal>{textModal.text}</TextModal>

                <Button
                  title="Completar desafio"
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </ModalView>
            </CenteredView>
          </ScrollView>
        </Modal>
      </Container>
    </ScrollView>
  );
};



export default Challenges;
