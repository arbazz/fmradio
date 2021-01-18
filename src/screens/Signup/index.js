import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Dimensions
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CustomTextInput, SocialButton } from '../../components';
import { primaryColor, secondaryColor } from '../../theme/config';

const height = Dimensions.get("window").height;

export default function Signup({navigation}) {

    return (
        <>
            <StatusBar backgroundColor={primaryColor} />
            <SafeAreaView style={{ backgroundColor: 'white', height: height }}>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/logo.png')}
                    />
                </View>
                <View style={styles.backCard}>
                    <CustomTextInput />
                    <CustomTextInput />
                    <CustomTextInput />
                    <CustomTextInput />
                </View>
                <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Home")}>
                    <Text style={styles.btnText}>SIGN UP</Text>
                </TouchableOpacity>
                <SocialButton navigation={navigation}/>
                <View style={styles.ag}>
                    <Text style={{ fontWeight: 'bold' }}>By signing up, you are agree with our </Text>
                    <Text style={styles.temr}>Terms and conditions</Text>
                </View>
            </SafeAreaView>
        </>
    )
};


const styles = StyleSheet.create({
    image: {
        width: '45%',
        height: 180,
        resizeMode: 'stretch',
        marginTop: -20
    },
    card: {
        height: height / 2,
        width: '100%',
        backgroundColor: primaryColor,
        alignItems: 'center',
    },
    backCard: {
        width: '100%',
        width: '80%',
        alignSelf: 'center',
        marginTop: -180,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 30
    },
    btn: {
        backgroundColor: secondaryColor,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 30,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    cente: {
        alignSelf: 'center',
        marginTop: 20,
    },
    textE: {
        color: 'grey',
        fontWeight: 'bold'
    },
    flipCad: {
        backgroundColor: 'white',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    imageCard: {
        width: 30,
        height: 30
    },
    ag: {
        marginTop: 15,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    temr: {
        color: 'pink',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textDecorationColor: 'pink'
    }
})