import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableOpacity,
    Alert
} from 'react-native';

export default function Gifts({ modalVisible }) {

    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
         
        >
            <View style={styles.container}>
                <View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.btton}>
                            <Text style={styles.text}>GIFTs</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={[styles.btton, { backgroundColor: 'white' }]}>
                            <Text>MicroPhones</Text>
                        </TouchableOpacity >
                    </View>
                    <View style={styles.otherRow}>
                        <TouchableOpacity style={[styles.btton, styles.otherROwBtn, {borderTopLeftRadius: 10,borderBottomLeftRadius: 10}]}>
                            <Text style={styles.text}>Classic</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={[styles.btton, styles.otherROwBtn]}>
                            <Text style={styles.text}>Vip</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={[styles.btton, styles.otherROwBtn]}>
                            <Text style={styles.text}>moods</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={[styles.btton, styles.otherROwBtn, {borderTopRightRadius: 10, borderBottomRightRadius: 10}]}>
                            <Text style={styles.text}>Collection</Text>
                        </TouchableOpacity >
                    </View>
                </View>
            </View>
        </Modal>

    )
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        height: '42%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: 'rgba(240,235,230, 0.45)'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 7
    },
    btton: {
        borderWidth: 1,
        borderColor: 'white',
        width: '40%',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
    otherRow: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    otherROwBtn: {
        width: '22.5%',
        borderRadius: 0
    }
})