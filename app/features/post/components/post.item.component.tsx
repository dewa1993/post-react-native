import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { TextStyles, ViewStyles } from '../../../types/styles'


interface PostItemProps {
    title?: string
    userName?: string
    onUserPressed: () => void
    onPostPressed: () => void

}

const PostItem = ({ title, userName, onPostPressed, onUserPressed }: PostItemProps): JSX.Element => {


    return (
        <View style={viewStyle.container}>
            <Pressable onPress={onPostPressed}>
                <Text style={textStyle.title}>{title}</Text>
            </Pressable>

            <Pressable onPress={onUserPressed}>
                <Text style={textStyle.username}>{userName}</Text>
            </Pressable>
        </View>
    )
}

const viewStyle = StyleSheet.create<ViewStyles>({
    container: {

    }
});

const textStyle = StyleSheet.create<TextStyles>({
    title: {

    },
    username: {

    }
});

export default PostItem;