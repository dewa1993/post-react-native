import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";


export type RootStackParams = {
    Post: undefined,
    PostDetails: { post: Post }
    UserDetails: { user: User }
}

type PostDetailNavigationProps = StackNavigationProp<RootStackParams, 'PostDetails'>
type PostDetailsRouteProps = RouteProp<RootStackParams, 'PostDetails'>
export type PostDetailProps = {
    route: PostDetailsRouteProps
    navigation: PostDetailNavigationProps
}

type UserDetailNavigationProps = StackNavigationProp<RootStackParams, 'UserDetails'>
type UserDetailsRouteProps = RouteProp<RootStackParams, 'UserDetails'>
export type UserDetailProps = {
    route: UserDetailsRouteProps
    navigation: UserDetailNavigationProps
}