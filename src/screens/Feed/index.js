import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { HomeTab, Post, Stories, WhatsonMind } from '../../components';

export default function Feed({ navigation }) {

    return (
        <>
            <ScrollView>
                <View style={styles.header}>
                    <EvilIcons name="search" style={styles.sesarfc} />
                    <Text style={styles.headerHeading}>Featured</Text>
                    <Text style={styles.headerHeading}>New</Text>
                    <Text style={styles.headerHeading}>Nearby</Text>
                </View>
                <WhatsonMind />
                <View style={[styles.row, styles.tag]}>
                    <Text style={styles.ttta}>Photo</Text>
                    <Text style={styles.ttta}>Video</Text>
                </View>
                <View style={styles.StoriesContianer}>
                    <Stories create={true} />
                    <Stories />
                    <Stories />
                    <Stories />
                </View>
                <View style={styles.contianerPost}>
                    <Post  />
                    <Post isImage={true}/>
                    <Post />
                </View>
            </ScrollView>
            <HomeTab navigation={navigation} />
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
    row: {
        flexDirection: 'row'
    },
    tag: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'space-around'
    },
    ttta: {
        backgroundColor: 'white',
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        elevation: 10

    },
    StoriesContianer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        flexDirection: 'row'
    },
    contianerPost: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 10
    }
})