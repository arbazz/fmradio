import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    TouchableOpacity
} from 'react-native';

export default function HomeTab({navigation}) {

    return (
        <View style={styles.contaienr}>
            <TouchableOpacity onPress={() => navigation.navigate("Microphone")} style={styles.back}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/Group1.png')}
                />
            </TouchableOpacity>
            <View style={styles.back}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/Group2.png')}
                />
            </View>
            <View style={styles.back}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/Group3.png')}
                />
            </View>
            <View style={styles.back}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/Group4.png')}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    contaienr: {
        backgroundColor: 'white',
        width: '90%',
        height: 60,
        marginBottom: 30,
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'flex-start',
        padding: 10,
        flexDirection: 'row',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    back: {
        backgroundColor: 'white',
        width :40,
        height: 40,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,

        shadowColor: "#000",
        
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    }
})