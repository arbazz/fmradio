import React, { useState } from "react";
import {
    View,
    Text,
    StatusBar,
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { useDispatch } from "react-redux";
import { CustomTextInput, SocialButton } from "../../components";
import { primaryColor, secondaryColor } from "../../theme/config";
import { useToast } from 'react-native-fast-toast'

export default function Sigin({ navigation }) {

    const [email, setEmail] = useState("");
    const [passwrod, setPassword] = useState("");

    const dispatch = useDispatch();
    const toast = useToast();

    const handleSingin  = () => {
        if(email && passwrod){
            
        }else{
            toast.show("please fill all fields", { type: "normal" });
        }
    }

    return (
        <>
            <StatusBar backgroundColor={primaryColor} />
            <SafeAreaView style={styles.contianer}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/logo.png')}
                />
                <View style={styles.textConti}>
                    <CustomTextInput
                        placeholderText="Email"
                        onChangeText={e => setEmail(e)}
                    />
                    <CustomTextInput
                        placeholderText="Password"
                        onChangeText={e => setPassword(e)}
                    />
                </View>
                <TouchableOpacity style={styles.btn} onPress={handleSingin}>
                    <Text style={styles.btnText}>SIGN UP</Text>
                </TouchableOpacity>
                <Text style={styles.for}>Forgot Password</Text>
                <SocialButton navigation={navigation} fromLog={true} />
            </SafeAreaView>
        </>
    )
};

const styles = StyleSheet.create({
    contianer: {
        backgroundColor: primaryColor,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '45%',
        height: 200,
        resizeMode: 'stretch',
        marginTop: -20
    },
    textConti: {
        width: '80%'
    },
    btn: {
        backgroundColor: secondaryColor,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 30,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    for: {
        marginTop: 20,
        color: 'white',
        fontWeight: 'bold',
        width: '80%',
        textAlign: 'right',
        marginRight: 24
    }
})