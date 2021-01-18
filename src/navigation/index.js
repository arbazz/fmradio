import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Microphone, Profile, Sigin, Signup } from '../screens';
import { CustomHeader } from '../components';


const Stack = createStackNavigator();


export default function App() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Signup" component={Signup} />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Sigin" component={Sigin} />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Home" component={Home} />
                <Stack.Screen
                    options={{ headerTitle: props => <CustomHeader {...props} /> }}
                    name="Profile" component={Profile} />
                <Stack.Screen
                    options={{ headerTitle: props => <CustomHeader {...props} /> }}
                    name="Microphone" component={Microphone} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}