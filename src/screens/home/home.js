import * as React from 'react';
import {ImageBackground, View,StyleSheet} from 'react-native';
import  ComponentSlider from 'integradora/src/components/Slider/ComponentSlider';
import  ModalHome from 'integradora/src/components/Modals/ModalHome';

const image={uri:"https://images.unsplash.com/photo-1563731649913-fab41907b535?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=244&q=80"};
 
export default function HomeScreen(){

    return(
    <ImageBackground source={image} style={styles.image}>
        <View style={[styles.container, {flexDirection: "column",alignItems: "center"}]}>  
              
        {/* <ComponentSlider /> */}
        </View> 
        
        <ModalHome />
        
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

