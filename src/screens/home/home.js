import * as React from 'react';
import {ImageBackground,Text, View,StyleSheet,Image} from 'react-native';
import  ComponentSlider from 'integradora/src/components/Slider/ComponentSlider';
import  ModalHome from 'integradora/src/components/Modals/ModalHome';

const image={uri:"https://images.unsplash.com/photo-1594997359555-0a9a13842be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=633&q=80"};
 
export default function HomeScreen(){

    return(
    <ImageBackground source={image} style={styles.image}>
     <View style={[styles.container, {flexDirection: "column"}]}>
      <ComponentSlider />     
      <ModalHome />  
      
    </View>  
    </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    });

