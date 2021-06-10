import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ViewStyle, ActivityIndicator } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../config/hooks';
import { POST, USER } from '../../../states';
import { getPostAsync } from '../../../states/Post';
import { getUserAsync } from '../../../states/User';
import { TextStyles, ViewStyles } from '../../../types/styles';
import PostItem from '../components/post.item.component';


const PostScreen = ({ navigation }: any): JSX.Element => {

    const posts = useSelector(POST.selectPosts);
    const status = useSelector(POST.selectStatus);
    const users = useSelector(USER.selectUser);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUserAsync)
        dispatch(getPostAsync)
        return () => {
            //cleanup
        }
    }, [])


    const renderItem = (item: Post): JSX.Element => {
        const selectedUser = users.find(user => user.id === item.userId);
        return <PostItem title={item.title} userName={selectedUser?.name} onPostPressed={() => {
            navigation.navigate("PostDetails", { post: item })
        }} onUserPressed={() => {
            navigation.navigate("UserDetails", { user: selectedUser })
        }} />
    }

    return (
        <View style={viewStyle.container}>

            {status == 'idle' ? <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={posts}
                renderItem={({ item }) => renderItem(item)}
            /> : <ActivityIndicator />}

        </View>
    )
}

const viewStyle = StyleSheet.create<ViewStyles>({
    container: {

    }
})

PostScreen['navigationOptions'] = ({ route, navigation }: any) => {
    return {
        title: 'Posts',
    }
}

export default PostScreen;