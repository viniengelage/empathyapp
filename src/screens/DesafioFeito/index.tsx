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

const textCard = [
  {
    title: 'Pergunte a alguém que você se importa, como foi o dia dela',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu amet nulla aliquet faucibus porttitor sit. Nisl id dignissim faucibus neque. Turpis nunc suscipit praesent nulla. Libero elementum enim egestas lorem aenean amet, quis tempor. Vestibulum porttitor tristique arcu felis. Pharetra vulputate mauris sed tristique augue rutrum vitae non. Lectus ut fermentum ultrices congue dictum. Mauris risus elit sodales turpis facilisi vestibulum sed eget pellentesque. Suspendisse habitant at enim arcu quis nisl eget. Id feugiat amet diam nunc. Ullamcorper malesuada arcu pretium placerat. Purus cras elementum egestas diam maecenas fusce elementum dui. Volutpat viverra viverra habitant varius porta massa nulla auctor. Sollicitudin et turpis felis amet vitae, volutpat est id. Semper amet gravida vitae mauris. Pretium, mi diam nunc dis dui, turpis ut mattis in. In turpis condimentum habitant urna integer enim. Enim ut praesent sit elementum eros. Adipiscing congue neque varius donec quis. Id id metus condimentum sed id nunc',
  },
  {
    title: 'Pergunte a alguém que você se importa, como foi o dia dela',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu amet nulla aliquet faucibus porttitor sit. Nisl id dignissim faucibus neque. Turpis nunc suscipit praesent nulla. Libero elementum enim egestas lorem aenean amet, quis tempor. Vestibulum porttitor tristique arcu felis. Pharetra vulputate mauris sed tristique augue rutrum vitae non. Lectus ut fermentum ultrices congue dictum. Mauris risus elit sodales turpis facilisi vestibulum sed eget pellentesque. Suspendisse habitant at enim arcu quis nisl eget. Id feugiat amet diam nunc. Ullamcorper malesuada arcu pretium placerat. Purus cras elementum egestas diam maecenas fusce elementum dui. Volutpat viverra viverra habitant varius porta massa nulla auctor. Sollicitudin et turpis felis amet vitae, volutpat est id. Semper amet gravida vitae mauris. Pretium, mi diam nunc dis dui, turpis ut mattis in. In turpis condimentum habitant urna integer enim. Enim ut praesent sit elementum eros. Adipiscing congue neque varius donec quis. Id id metus condimentum sed id nunc',
  },
  {
    title: 'Pergunte a alguém que você se importa, como foi o dia dela',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu amet nulla aliquet faucibus porttitor sit. Nisl id dignissim faucibus neque. Turpis nunc suscipit praesent nulla. Libero elementum enim egestas lorem aenean amet, quis tempor. Vestibulum porttitor tristique arcu felis. Pharetra vulputate mauris sed tristique augue rutrum vitae non. Lectus ut fermentum ultrices congue dictum. Mauris risus elit sodales turpis facilisi vestibulum sed eget pellentesque. Suspendisse habitant at enim arcu quis nisl eget. Id feugiat amet diam nunc. Ullamcorper malesuada arcu pretium placerat. Purus cras elementum egestas diam maecenas fusce elementum dui. Volutpat viverra viverra habitant varius porta massa nulla auctor. Sollicitudin et turpis felis amet vitae, volutpat est id. Semper amet gravida vitae mauris. Pretium, mi diam nunc dis dui, turpis ut mattis in. In turpis condimentum habitant urna integer enim. Enim ut praesent sit elementum eros. Adipiscing congue neque varius donec quis. Id id metus condimentum sed id nunc',
  },
  {
    title: 'Pergunte a alguém que você se importa, como foi o dia dela',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu amet nulla aliquet faucibus porttitor sit. Nisl id dignissim faucibus neque. Turpis nunc suscipit praesent nulla. Libero elementum enim egestas lorem aenean amet, quis tempor. Vestibulum porttitor tristique arcu felis. Pharetra vulputate mauris sed tristique augue rutrum vitae non. Lectus ut fermentum ultrices congue dictum. Mauris risus elit sodales turpis facilisi vestibulum sed eget pellentesque. Suspendisse habitant at enim arcu quis nisl eget. Id feugiat amet diam nunc. Ullamcorper malesuada arcu pretium placerat. Purus cras elementum egestas diam maecenas fusce elementum dui. Volutpat viverra viverra habitant varius porta massa nulla auctor. Sollicitudin et turpis felis amet vitae, volutpat est id. Semper amet gravida vitae mauris. Pretium, mi diam nunc dis dui, turpis ut mattis in. In turpis condimentum habitant urna integer enim. Enim ut praesent sit elementum eros. Adipiscing congue neque varius donec quis. Id id metus condimentum sed id nunc',
  },
];

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

        {TextCard.map(e => (
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
        ))}
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
