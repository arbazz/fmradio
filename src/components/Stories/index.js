import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Stories({create}) {

    return (
        <View style={styles.contianer}>
            <ImageBackground
                source={require('../../../assets/fm1.png')}
                style={styles.image}
                borderRadius={10}
            >
                <View style={[styles.createContianer, create && {backgroundColor: 'white'}]}>
                    {!!create && <AntDesign name="pluscircle" style={styles.plus} />}
                    <Text>Create Story</Text>
                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    contianer: {
        marginRight: 20,
    },
    image: {
        width: 90,
        height: 130,
        elevation: 10,
        justifyContent: 'flex-end'
    },
    createContianer: {
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center'
    },
    plus: {
        alignSelf: 'center',
        backgroundColor: 'white',
        marginTop: -8,
        padding: 5,
        borderRadius: 50,
        elevation: 10,
        color: 'purple',
        fontSize: 18
    }
})