import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from "./styles"
import NavigationButtons from './NavigationBottom';

function DetailScreen({route, navigation}) {
    const {image, Title, description, stock} = route.params;

    return (
        <View style={styles.containerDetails}>
            <View  style={styles.textDetails}>
                <Image source={{uri: image}}
                    style={{width: 218, height: 100,}} />
                <Text style={{alignSelf:"center", fontSize:40}}>{Title}</Text>
                <Text>{description}</Text>
                <Text>{stock}</Text>
            </View>
            <NavigationButtons/>
        </View>
    );
}

export default DetailScreen;
