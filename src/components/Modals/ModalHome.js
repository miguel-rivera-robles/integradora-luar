import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import { Card, CardTitle, CardContent, CardImage } from 'react-native-material-cards'
import { StyleSheet,View} from 'react-native';

const ModalHome = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <View style={styles.modalView}>
         <Text style={styles.parrafo}>UNA EMPRESA 100% MEXICANA fundada en el año 2020, estamos enfocados en el desarrollo de toda la industria alrededor del café. Con más de 50 productos en el mercado. Luar caffe es un concepto para recargate de energia sin salir de casa, contamos con envio</Text>
        </View>
        </Modal>
      </Portal>
      <Button style={{marginTop: 30}} onPress={showModal}>
       <Text style={styles.titulo}> Luar Coffe </Text>
      </Button>
    </Provider>
  );
};

export default ModalHome;

const styles = StyleSheet.create({
    titulo: {
        color:'white',    
        fontSize: 50,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    parrafo: {
        color:'black',    
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        }
});