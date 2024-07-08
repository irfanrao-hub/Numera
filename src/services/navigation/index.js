import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { routes } from '..'
import { AuthNavigation } from './authFlow'
import App from '../../../App'
import { Answer, ChangePassword, ContactUs, Feedback, PrivacyPolicy, Problem, Whiteboard } from '../../screens/appFlow'
import ArchiveAns from '../../screens/appFlow/archiveans'
// import DrawerNavigator from './drawerFlow'
import EditProfile from '../../screens/appFlow/editprofile'
import { TabNavigator } from './tabFlow'

const MyStack = createStackNavigator()
export const MainNavigator = () => {

    return (
        <NavigationContainer >
            <MyStack.Navigator initialRouteName={routes.auth} screenOptions={{ headerShown: false, }}>

                <MyStack.Screen name={routes.auth} component={AuthNavigation} />
                <MyStack.Screen name={routes.tab} component={TabNavigator} />

                <MyStack.Screen name={routes.problem} component={Problem} />
                <MyStack.Screen name={routes.whiteboard} component={Whiteboard} />
                <MyStack.Screen name={routes.answer} component={Answer} />
                <MyStack.Screen name={routes.archiveans} component={ArchiveAns} />
                <MyStack.Screen name={routes.editprofile} component={EditProfile} />
                <MyStack.Screen name={routes.changepassword} component={ChangePassword} />
                <MyStack.Screen name={routes.privacypolicy} component={PrivacyPolicy} />
                <MyStack.Screen name={routes.contactus} component={ContactUs} />
                <MyStack.Screen name={routes.feedback} component={Feedback} />     

            </MyStack.Navigator>
        </NavigationContainer>
    )
}