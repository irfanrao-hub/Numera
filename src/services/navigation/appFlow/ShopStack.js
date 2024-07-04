




import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { routes } from '../../constants'
import * as App from '../../../screens/appFlow';

const MyStack = createStackNavigator()
export class ShopStack extends Component {
    render() {
        return (
            <MyStack.Navigator initialRouteName={routes.shop} screenOptions={{ headerShown: false }}>
                <MyStack.Screen name={routes.shop} component={App.Shop} />
            </MyStack.Navigator>
        )
    }
}


