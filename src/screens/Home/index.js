import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Dimensions,
    ScrollView
} from 'react-native';
import { primaryColor, secondaryColor } from '../../theme/config';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { CardMain, HomeTab } from '../../components';

const height = Dimensions.get("window").height;

export default function Home({ navigation }) {

    return (
        <>
            <StatusBar backgroundColor={primaryColor} />
            <SafeAreaView style={{ backgroundColor: 'white', height: height }}>
                <ScrollView>
                    <View style={styles.header}>
                        <EvilIcons name="search" style={styles.sesarfc} />
                        <Text style={styles.headerHeading}>Featured</Text>
                        <Text style={styles.headerHeading}>New</Text>
                        <Text style={styles.headerHeading}>Nearby</Text>
                    </View>
                    <Image
                        style={styles.banner}
                        source={require('../../../assets/banner.png')}
                    />
                    <View style={styles.cardCOntianer}>
                        <CardMain navigation={navigation} />
                        <CardMain navigation={navigation} />
                        <CardMain navigation={navigation} />
                        <CardMain navigation={navigation} />
                    </View>
                    <View style={{ height: 50 }} />
                </ScrollView>
                <HomeTab navigation={navigation} />
            </SafeAreaView>
        </>
    )
};


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
        paddingRight: 20
    },
    sesarfc: {
        fontSize: 32,
    },
    headerHeading: {
        fontWeight: 'bold',
        fontSize: 20
    },
    banner: {
        width: '95%',
        alignSelf: 'center',
        height: 220,
        borderRadius: 20,
        marginTop: 20
    },
    cardCOntianer: {
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        marginTop: 5,
        flexWrap: 'wrap'
    }
})