import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AlbumCard, BottomTab } from '../../components';
import { primaryColor } from '../../theme/config';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile({ navigation }) {

    return (
        <>
            <ScrollView contentContainerStyle={{ backgroundColor: 'white' }}>
                <View style={styles.cardBlue}>
                    <Image
                        source={require('../../../assets/fm1.png')}
                        style={styles.image} />
                    <View style={styles.centerV}>
                        <Text style={styles.name}>Olivai</Text>
                        <Text style={[styles.subdue]}>22</Text>
                        <Text style={[styles.subdue]}>22</Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/fmlogo.png')}
                    />
                    <ScrollView horizontal={true} contentContainerStyle={styles.rowAb}>
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                    </ScrollView>
                </View>
                <View style={styles.audioBar}>
                    <View style={styles.row}>
                        <Image
                            source={require('../../../assets/fm1.png')}
                            style={styles.audioimage} />
                        <View style={styles.containerMai}>
                            <Text style={[styles.titleAudio, styles.bold]}>Lose yoursel</Text>
                            <Text style={styles.titleAudio}>Eminem</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <AntDesign style={styles.audioIcon} name="caretleft" />
                        <AntDesign name="pause" style={[styles.audioIcon, { fontSize: 44 }]} />
                        <AntDesign name="caretright" style={styles.audioIcon} />
                    </View>
                </View>
                <View style={styles.social}>
                    <Text style={styles.textCenter}>Follow me on</Text>
                    <View style={[styles.row, styles.socialContainre]}>
                        <View style={styles.iconSocial}>
                            <EvilIcons name="sc-facebook" style={styles.actIcon} />
                        </View>
                        <View style={styles.iconSocial}>
                            <EvilIcons name="sc-twitter" style={[styles.actIcon, { color: '#38a1f3' }]} />
                        </View>
                        <View style={styles.iconSocial}>
                            <Ionicons name="md-logo-whatsapp" style={[styles.actIcon, { fontSize: 23, color: 'green' }]} />
                        </View>
                    </View>
                </View>
                <View style={[styles.row, styles.textContianer]}>
                    <TextInput placeholder="Leave a message" style={styles.textinp} />
                    <Ionicons name="send-outline" style={styles.send} />
                </View>
                <View style={{ height: 20 }} />
            </ScrollView>
            <BottomTab navigation={navigation} />
        </>
    )
};

const styles = StyleSheet.create({
    cardBlue: {
        backgroundColor: primaryColor,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20
    },
    centerV: {
        marginLeft: 20
    },
    name: {
        color: 'white',
        fontSize: 22
    },
    subdue: {
        color: 'grey',
        marginTop: 2,
        fontSize: 18
    },
    logo: {
        alignSelf: 'center'
    },
    rowAb: {
        flexDirection: 'row'
    },
    audioBar: {
        marginTop: 40,
        backgroundColor: primaryColor,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 30
    },
    audioimage: {
        width: 70,
        height: 70,
        borderRadius: 140
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerMai: {
        marginLeft: 20
    },
    titleAudio: {
        color: 'white',
        fontSize: 20
    },
    bold: {
        fontWeight: 'bold'
    },
    audioIcon: {
        color: 'white',
        fontSize: 28
    },
    social: {
        alignSelf: 'center',
        marginTop: 30
    },
    textCenter: {
        fontSize: 28
    },
    socialContainre: {
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'space-around'
    },
    iconSocial: {
        borderColor: 'grey',
        borderWidth: 1,
        height: 40,
        width: 40,
        borderRadius: 180,
        justifyContent: 'center',
        alignItems: 'center'
    },
    actIcon: {
        fontSize: 30,
        color: 'blue'
    },
    textContianer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,

        width: '90%',
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 30,
        borderRadius: 15
    },
    textinp: {
        width: '85%',
        paddingLeft: 10
    },
    send: {
        backgroundColor: primaryColor,
        color: 'white',
        padding: 10,
        borderRadius: 180,
        fontSize: 20,
        marginRight: 20
    }
})