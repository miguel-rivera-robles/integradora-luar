import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View ,StyleSheet} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';

export default function ComponentSlider(){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://10.0.2.2:8000/api/productosLimitados')
          .then((response) => response.json())
          .then((json) => setData(json))
          .then(console.log(setData))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

return(
    <View style={{ flex: 1, padding: 0 }}>
      {isLoading ? <ActivityIndicator/> : (
  
        <FlatListSlider
          data={data}
          timer={3000}
          indicatorContainerStyle={{position:'absolute', bottom: 10}}
          indicatorActiveColor={'#8e44ad'}
          indicatorInActiveColor={'#ffffff'}
          

        /> 
      )}
    </View>
    );
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    },
    imageCategory: {
        width: 90,
        height: 90,
      },

});