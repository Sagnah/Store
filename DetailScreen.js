import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from "./styles"

function DetailScreen({route, navigation}) {
    const {image, Title, description, stock} = route.params;
    navigation.SetOptions({title: Title, headerRight:()=>{
        <Button Title="Buy"
        OnClick={()=>{}}
        disabled={stock===0}
        />
    } })
    return (
        <View style={styles.containerDetails}>
            <View  style={styles.textDetails}>
                <Image source={{uri: image}}
                    style={{width: 218, height: 100,}} />
                <Text style={{alignSelf:"center", fontSize:40}}>{Title}</Text>
                <Text>{description}</Text>
                <Text>{stock}</Text>
            </View>
        </View>
    );
}

export default DetailScreen;
