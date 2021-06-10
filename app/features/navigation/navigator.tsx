import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PostScreen from '../post/screen/posts.screen';
import PostDetailsScreen from '../post/screen/post.details.screen';
import UserDetailsScreen from '../user/screen/user.details.screen';
import { Platform, StyleSheet } from 'react-native';
import { ViewStyles } from '../../types/styles';
import { RootStackParams } from '../../types/navigation';

const MainStackNavigator = createStackNavigator<RootStackParams>()

const navigationStyle = StyleSheet.create<ViewStyles>({
    headerStyle: {
        backgroundColor: "#F5Fcff",
        height: Platform.select({ ios: 100, android: 60 })
    },
    headerTitleStyle: {
        fontWeight: "400",
        color: "#171B27"
    }
})

const RootNavigation = (): JSX.Element => {


    return (
        <MainStackNavigator.Navigator
            screenOptions={{
                headerStyle: navigationStyle.headerStyle,
                headerTitleStyle: navigationStyle.headerTitleStyle
            }}
            initialRouteName={"PostDetails"}>
            <MainStackNavigator.Screen
                name="Post"
                component={PostScreen}
                options={PostScreen.navigationOptions}
            />

            <MainStackNavigator.Screen
                name="PostDetails"
                component={PostDetailsScreen}
                options={PostDetailsScreen.navigationOptions}
            />

            <MainStackNavigator.Screen
                name="UserDetails"
                component={UserDetailsScreen}
                options={PostDetailsScreen.navigationOptions}
            />


        </MainStackNavigator.Navigator>
    )

}

export default RootNavigation;