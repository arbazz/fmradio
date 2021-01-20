import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { primaryColor } from '../../theme/config';

export default function BottomTab({ showLiveButton, showCurve, navigation }) {

    return (
        <View style={[styles.cotniaer, showCurve && styles.curve]}>
            <AntDesign name="home" style={styles.icon} onPress={() => navigation.navigate("Feed")} />
            {!showLiveButton ? <View style={styles.row}>
                <AntDesign name="user" style={[styles.icon, { color: primaryColor }]} />
                <Text style={styles.user}>Users</Text>
            </View> :
                <Image style={styles.imageOn}
                    source={require('../../../assets/fmlogo.png')} />
            }
            <AntDesign name="setting" style={styles.icon} />
        </View>
    )
};

const styles = StyleSheet.create({
    cotniaer: {
        backgroundColor: 'white',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        color: 'grey',
        fontSize: 32
    },
    user: {
        color: primaryColor,
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 3
    },
    imageOn: {
        width: 60,
        height: 60,
        marginTop: -30
    },
    curve: {
        borderRadius: 20,
        backgroundColor: '#f2efef'
    }
})