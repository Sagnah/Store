import React from 'react';
import {StyleSheet, View,ScrollView} from 'react-native';
import Box from './Box';
import tasks from './data/tasks';


function MenuScreen() {
    return (
        <ScrollView>
        <View style={styles.root}>
            <View style={styles.containerBox}>
                {
                    tasks.map((task, i) => (
                        <Box 
                            key={i}
                            description = {task.description} 
                            image={task.image} 
                            Title={task.Title}   
                            stock={task.stock}
                        />
                    ))
                }
            </View>
        </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f44611',
    },

    containerBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
})

export default MenuScreen;