



import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { routes } from '../../constants'
import * as App from '../../../screens/appFlow';

const MyStack = createStackNavigator()
export class ProgressStack extends Component {
    render() {
        return (
            <MyStack.Navigator initialRouteName={routes.progress} screenOptions={{ headerShown: false }}>
                <MyStack.Screen name={routes.progress} component={App.Progress} />
            </MyStack.Navigator>
        )
    }
}
