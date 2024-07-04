import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'

import { routes } from '../../constants';
import * as Auth from '../../../screens/authFlow';
// import DrawerNavigator from '../drawerFlow';

const AuthStack = createStackNavigator()

export const AuthNavigation = () => {
    return (
        <AuthStack.Navigator initialRouteName={routes.splash} screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter }}>
          
            <AuthStack.Screen name={routes.splash} component={Auth.Splash} />
            <AuthStack.Screen name={routes.onboarding} component={Auth.Onboarding} />
            <AuthStack.Screen name={routes.login} component={Auth.Login} />
            <AuthStack.Screen name={routes.signup} component={Auth.Signup} />
            <AuthStack.Screen name={routes.accountsetup} component={Auth.Accountsetup} />
            <AuthStack.Screen name={routes.forgetpasword} component={Auth.forgetpasword} />
            <AuthStack.Screen name={routes.otpscreen} component={Auth.Otpscreen} />
            <AuthStack.Screen name={routes.createpassword} component={Auth.Createpassword} />
        </AuthStack.Navigator>
    )
}
