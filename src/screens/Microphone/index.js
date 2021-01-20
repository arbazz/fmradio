import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { BottomTab } from '../../components';
import { primaryColor } from '../../theme/config';

export default function Microphone({navigation}) {

    return (
        <>
            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    style={styles.imageTitle}
                    source={require('../../../assets/micTItle.png')} />
                <View style={styles.row}>
                    <View style={styles.card}>
                        <Image source={require('../../../assets/micpic.png')} style={styles.mic} />
                        <Text style={styles.name}>Name</Text>
                        <Text style={styles.pr}>$00.0</Text>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.pri}>Purchase</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <Image source={require('../../../assets/micpic.png')} style={styles.mic} />
                        <Text style={styles.name}>Name</Text>
                        <Text style={styles.pr}>$00.0</Text>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.pri}>Purchase</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <Image source={require('../../../assets/micpic.png')} style={styles.mic} />
                        <Text style={styles.name}>Name</Text>
                        <Text style={styles.pr}>$00.0</Text>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.pri}>Purchase</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <Image source={require('../../../assets/micpic.png')} style={styles.mic} />
                        <Text style={styles.name}>Name</Text>
                        <Text style={styles.pr}>$00.0</Text>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.pri}>Purchase</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 30 }} />
            </ScrollView>
            <BottomTab showLiveButton={true} showCurve={true} navigation={navigation}/>
        </>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexGrow: 1
    },
    imageTitle: {
        width: '100%',
        resizeMode: 'stretch',
        height: 80,
        marginTop: 20
    },
    card: {
        backgroundColor: primaryColor,
        width: '45%',
        overflow: 'hidden',
        height: 310,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginLeft: 15,
        marginTop: 20
    },
    mic: {
        width: '90%',
        height: 150,
        resizeMode: 'stretch',

    },
    name: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10
    },
    pr: {
        color: 'white',
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 24
    },
    btn: {
        backgroundColor: 'white',
        width: '80%',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    pri: {
        color: primaryColor,
        fontSize: 24,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})