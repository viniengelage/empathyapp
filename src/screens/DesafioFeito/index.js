import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  Modal,
  Pressable,
} from 'react-native';

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

const App: () => Node = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [textModal, setTextModal] = useState({
    title: '',
    text: '',
  });
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.container}>
        <Image style={styles.image} source={require('./foguetinho.png')} />
        <Text style={styles.paragraph}>Desafios Realizados</Text>

        {textCard.map(e => (
          <Pressable
            style={styles.card}
            onPress={() => {
              setTextModal(e);
              setModalVisible(true);
            }}>
            <View style={styles.textArea}>
              <View style={styles.lineText}></View>
              <Text style={styles.textCard}>{e.title}</Text>
            </View>
            <View style={styles.buttonArea}>
              <Text style={styles.textButton}>Ver desafio</Text>
              <Image
                style={styles.buttonImg}
                source={require('./button.png')}
              />
            </View>
          </Pressable>
        ))}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Pressable
                  style={styles.buttonClose}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Image
                    style={styles.closeImg}
                    source={require('./close.png')}
                  />
                </Pressable>

                <View style={styles.textArea}>
                  <View style={styles.lineText}></View>
                  <Text style={styles.textCard}>{textModal.title}</Text>
                </View>
                <Text style={styles.textModal}>{textModal.text}</Text>
                <Pressable
                  style={styles.buttonModal}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.buttonModalText}>Completar desafio</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </Modal>
      </View>
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
    fontColor: '#252627',
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 40,
  },
  image: {
    width: 64,
    height: 64,
    marginTop: 32,
  },
  textCard: {
    width: 230,
    fontColor: '#252627',
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '400',
    textAlign: 'left',
  },
  textArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineText: {
    height: 80,
    width: 4,
    borderRadius: 6,
    backgroundColor: '#440a67',
    marginRight: 8,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 150,
    width: '100%',
    backgroundColor: '#F2F2F2',
    boxShadow: '-4px 4px 4px -2px rgba(0, 0, 0, 0.19)',
    borderRadius: 12,
    marginBottom: 16,
    padding: 20,
  },
  buttonArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 19,
  },
  textButton: {
    color: '#996DA8',
    fontSize: 18,
    lineHeight: 18,
    fontWeight: '500',
  },
  buttonImg: {
    marginLeft: 8,
    width: 18,
    height: 18,
  },

  //styles Modal
  centeredView: {
    flex: 1,
  },
  modalView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 35,
  },
  buttonClose: {
    position: 'absolute',

    right: 32,
    top: 32,
  },
  closeImg: {
    height: 13,
    width: 13,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  textModal: {
    textAlign: 'left',
    marginTop: 30,
    fontSize: 16,
    color: '#252627',
  },
  buttonModal: {
    backgroundColor: '#996DA8',
    borderRadius: 20,
    padding: 12,
    marginTop: 40,
  },
  buttonModalText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;
