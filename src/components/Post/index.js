import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default function Post({isImage}) {

    return (
        <View style={styles.cotniaenr}>
            <View style={styles.header}>
                <Image source={require('../../../assets/fm1.png')} style={styles.image} />
                <View>
                    <Text style={styles.postacc}>post</Text>
                    <Text style={styles.m}>49 m</Text>
                </View>
            </View>
            <View>
                {!isImage ? <Text style={styles.des}>lorem ipsim lorem ipsim lorem ipsim lorem ipsim lorem ipsim
                lorem ipsim lorem ipsim lorem ipsim lorem ipsim lorem ipsim lorem ipsim
                lorem ipsim lorem ipsim lorem ipsim lorem ipsim lorem ipsim lorem ipsim
                lorem ipsim lorem ipsim lorem ipsim lorem ipsim lorem ipsim
                </Text>
                :
                <Image style={styles.image1}
                source={{uri: "https://www.criticalcase.com/file/2019/06/linux-470x336.png"}}/>}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    cotniaenr: {
        backgroundColor: 'white',
        padding: 10
    },
    image: {
        borderRadius: 4,
        width: 40,
        height: 40,
        borderRadius: 199
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    postacc: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    m: {
        fontSize: 8,
        alignSelf: 'flex-end',
        color: 'grey'
    },
    des: {
        fontWeight: '700'
    },
    image1: {
        width: '100%',
        height: 150,
        marginTop: 10
    }
})