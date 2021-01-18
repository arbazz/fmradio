import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { primaryColor, secondaryColor } from '../../theme/config';

export default function ({ navigation }) {

    return (
        <TouchableOpacity
            onPress={() => navigation.push("Profile")}
            style={styles.contiaenr}>
            <ImageBackground
                source={require('../../../assets/fm1.png')}
                style={styles.image}
                borderRadius={10}
            >
                <View style={styles.inner}>
                    <View style={styles.starcont}>
                        <Entypo name="star" style={styles.star} />
                        <Text style={styles.title}>STAR 01</Text>
                    </View>
                    <Text style={styles.name}>OLIVIA.</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    contiaenr: {
        width: '43%',
        marginHorizontal: '3.5%',
        marginTop: 20
    },
    image: {
        width: '100%',
        height: 200,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 10
    },
    inner: {
        // backgroundColor: 'red',
        height: '100%',
        justifyContent: 'space-between'
    },
    starcont: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.8)',
        alignSelf: 'flex-start',
        borderRadius: 20,
        padding: 5,
        alignItems: 'center',
        marginTop: 1
    },
    star: {
        color: secondaryColor,
        fontSize: 30,
        marginRight: 5,
        marginLeft: 5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 10
    },
    name: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10
    }
})