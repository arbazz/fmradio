import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput
} from 'react-native'

export default function WhtsonMind({create}) {

    return (
        <View style={styles.contianer}>
            <Image source={require('../../../assets/fm1.png')}
                style={styles.image}
            />
            <TextInput
                placeholder="What's in your mind ?"
                style={styles.textINp}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    contianer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row'
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 50
    },
    textINp: {
        width: '80%',
        marginLeft: '4%',
        borderRadius: 15,
        padding: 10,
        elevation: 10,
        backgroundColor: 'white'
    }
})