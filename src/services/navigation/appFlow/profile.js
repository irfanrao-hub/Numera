
import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { routes } from '../../constants'
import * as App from '../../../screens/appFlow';
const MyStack = createStackNavigator()
export class DashboardStack extends Component {
    render() {
        return (
            <MyStack.Navigator initialRouteName={routes.problem} screenOptions={{ headerShown: false }}>
                <MyStack.Screen name={routes.profile} component={App.Problem} />
            </MyStack.Navigator>
        )
    }
}
