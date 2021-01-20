import React, {useState} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    Modal,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Gifts } from '../../components';

export default function Live() {
    const [modalVisible, setModalVisible] = useState(false);


    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" }}
                style={styles.backGround}
                borderRadius={20}
            >
                <View style={styles.contianertop}>
                    <View style={styles.center}>
                        <Image
                            source={{ uri: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" }}
                            style={styles.image}
                        />
                        <Text style={styles.name}>Olivia</Text>
                        <AntDesign name="heart" style={styles.heart} onPress={()=> setModalVisible(true)}/>
                        <AntDesign name="adduser" style={styles.adduser}/>
                        <AntDesign name="sharealt" style={styles.share}/>
                    </View>
                    <View>
                        <AntDesign name="close" style={styles.share}/>
                    </View>
                </View>
                <View>
                    <Gifts modalVisible={modalVisible}/>
                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
        height: '98%',
        marginTop: '1%'
    },
    backGround: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 30,
    },
    contianertop: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        color: 'white',
        marginTop: 5,
        fontSize: 20
    },
    center: {
        alignItems: 'center'
    },
    heart: {
        color: 'red',
        marginTop: 10,
        fontSize: 34
    },
    adduser :{
        backgroundColor: '#8dfab4',
        padding: 10,
        borderRadius: 25,
        color: 'black',
        fontSize: 17,
        marginTop: 10
    },
    share: {
        marginTop: 10,
        color: 'white',
        fontSize: 35
    }
})