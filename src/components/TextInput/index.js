import * as React from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';


export default function CustomTextInput({placeholderText, onChangeText, value}) {

    return (
        <View>
            <TextInput
                placeholder={placeholderText ? placeholderText : "TEXT HERE"}
                style={styles.text}
                onChangeText={e=>onChangeText(e)}
                value={value}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        width: '100%',
        borderColor: 'grey',
        borderWidth: 0,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        backgroundColor: 'white',
        paddingLeft: 10,
        marginTop: 15
    }
})