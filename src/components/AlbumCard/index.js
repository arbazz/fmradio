import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

export default function AlbumCard() {

    return (
        <TouchableOpacity style={styles.contaienr}>
            <Image
                style={styles.image}
                source={require('../../../assets/fm1.png')}
            />
            <View style={styles.titleCPm} >
                <Text>Album name</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    contaienr: {
        borderColor: 'green',
        borderWidth: 1,
        width: 120,
        borderRadius: 10,
        marginLeft: 10
    },
    image: {
        width: 118,
        height: 120,
        borderRadius: 10
    },
    titleCPm: {
        backgroundColor: 'green',
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})