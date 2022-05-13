import React from 'react';
import {Button, Text, View, Image} from 'react-native';
import styles from'./styles';
import { useNavigation } from '@react-navigation/native';

function Box({Title, description, image, stock}) {

    const navigation = useNavigation();

    return (
        <View style={styles.box}>
            <Image source={{uri: image}}
                style={{width: 218, height: 100, borderTopLeftRadius: 15, borderTopRightRadius: 15,}} />

            <Text style={styles.boxText}>-Title: {Title}</Text>
            <Text style={styles.boxText}>-Description: {description}</Text>
            <Button
                title="Detalle" 
                style={{paddingBottom: 5,}}
                onPress={() => navigation.navigate('Details', {
                    image: image,
                    Title: Title,
                    description: description,
                    stock: stock,
            })}/> 
        </View>
    );
}

export default Box;