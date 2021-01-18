import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { primaryColor, secondaryColor } from '../../theme/config';

export default function SocialButton({navigation, fromLog}) {
    return (
        <>
            <View style={styles.cente}>
                {!fromLog ? <TouchableOpacity onPress={()=>navigation.navigate("Sigin")}>
                <Text style={styles.textE}>Already have account</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
                <Text style={[styles.textE, {color: secondaryColor}]}>Dont have an account?</Text>
                </TouchableOpacity>
                }
                <View style={styles.row}>
                    <TouchableOpacity style={styles.flipCad}>
                        <Image style={styles.imageCard}
                            source={require('../../../assets/googlelogo.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.flipCad}>
                        <Image style={styles.imageCard}
                            source={require('../../../assets/fblogo.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.flipCad}>
                        <Image style={styles.imageCard}
                            source={require('../../../assets/twitterlogo.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    cente: {
        alignSelf: 'center',
        marginTop: 20,
        alignItems: 'center'
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
        marginRight: 20,

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
        width: 25,
        height: 25
    },
    row: {
        flexDirection: 'row'
    }
})