import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native'
import { UserDetailProps } from '../../../types/navigation';
import { TextStyles, ViewStyles } from '../../../types/styles';


const UserDetailsScreen = ({ navigation, route }: UserDetailProps): JSX.Element => {

    const user = route.params.user;

    return (
        <View style={viewStyle.container}>
            <Text style={textStyle.username}>{user.name}</Text>
            <Text style={textStyle.company}>{user.company}</Text>
            <Text style={textStyle.email}>{user.email}</Text>
        </View>
    )
}

const viewStyle = StyleSheet.create<ViewStyles>({
    container: {

    }
})

const textStyle = StyleSheet.create<TextStyles>({
    username: {

    },
    company: {

    },
    email: {
    }
})

UserDetailsScreen['navigationOptions'] = ({ route, navigation }: any) => {
    return {
        title: 'User Details',
    }
}

export default UserDetailsScreen;