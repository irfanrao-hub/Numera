




import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { routes } from '../../constants'
import * as App from '../../../screens/appFlow';
const MyStack = createStackNavigator()
export class DashboardStack extends Component {
    render() {
        return (
            <MyStack.Navigator initialRouteName={routes.whiteboard} screenOptions={{ headerShown: false }}>
                <MyStack.Screen name={routes.whiteboard} component={App.Whiteboard} />
            </MyStack.Navigator>
        )
    }
}
