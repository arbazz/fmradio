import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function CustomHeader() {

    return (
        <View style={styles.contianre}>
            <Text ></Text>
            <Feather style={styles.icon} name="menu" />
        </View>
    )
};

const styles = StyleSheet.create({
    contianre: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        fontSize: 32,
    }
})