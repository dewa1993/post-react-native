import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native'
import { PostDetailProps } from '../../../types/navigation';
import { TextStyles, ViewStyles } from '../../../types/styles';


const PostDetailsScreen = ({ navigation, route }: PostDetailProps): JSX.Element => {

    const post = route.params.post;
    // missing the post comment section 
    return (
        <View style={viewStyle.container}>
            <Text>{post.title}</Text>
            <Text>{post.body}</Text>
        </View>
    )
}

const viewStyle = StyleSheet.create<ViewStyles>({
    container: {

    }
})

const textStyle = StyleSheet.create<TextStyles>({

})

PostDetailsScreen['navigationOptions'] = ({ route, navigation }: any) => {
    return {
        title: 'Posts Details',
    }
}

export default PostDetailsScreen;