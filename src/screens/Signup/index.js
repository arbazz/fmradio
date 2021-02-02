import React, { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { CustomTextInput, SocialButton } from '../../components';
import { addUser } from '../../redux/actions';
import { primaryColor, secondaryColor } from '../../theme/config';
import { useToast } from 'react-native-fast-toast'
import auth from '@react-native-firebase/auth';

const height = Dimensions.get("window").height;

export default function Signup({ navigation }) {

    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [passwrod, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const dispatch = useDispatch();
    const toast = useToast()

    const handleSignup = () => {
        if (name && email && passwrod) {
            if (passwrod === confirm) {
                signUp();
            } else {
                toast.show("password does not match", { type: "normal" });
            }
        } else {
            toast.show("please fill all fields", { type: "normal" });
        }
      
    };

    const signUp = () => {
        auth()
            .createUserWithEmailAndPassword(email, passwrod)
            .then(() => {
                console.log('User account created & signed in!');
                dispatch(addUser({ name, email, passwrod }));
            })
            .catch(error => {
                if (error.code === 'auth/weak-password') {
                    toast.show("Password must be 8 chracter", { type: "normal" });
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                    toast.show("Invalid email", { type: "normal" });
                }
                if(error.code === "auth/email-already-in-use"){
                    toast.show("Emial already in use", { type: "normal" });
                }
                console.log(error.code);
            });
    }

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
                    <CustomTextInput
                        placeholderText="Full name"
                        onChangeText={e => setname(e)} />
                    <CustomTextInput
                        placeholderText="Email"
                        onChangeText={e => setEmail(e)} />
                    <CustomTextInput
                        placeholderText="Password"
                        onChangeText={e => setPassword(e)} />
                    <CustomTextInput
                        placeholderText="Confirm passwrod"
                        onChangeText={e => setConfirm(e)} />
                </View>
                <TouchableOpacity style={styles.btn} onPress={handleSignup}>
                    <Text style={styles.btnText}>SIGN UP</Text>
                </TouchableOpacity>
                <SocialButton navigation={navigation} />
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