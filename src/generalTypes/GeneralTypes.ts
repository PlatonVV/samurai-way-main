import { sendMessageAC} from '../reducers/dialogsReducer';
import {addPostAC} from '../reducers/profileReducer';

export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (callBack: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type PostsType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    newPostText: string
    posts: PostsType[]
}
export type MessageType = {
    id: string
    message: string
}
export type DialogsType = {
    id: string
    name: string
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    newMessageBody: string
}
export type FriendsType = {
    id: string
    name: string
}
export type SidebarType = {
    friends: FriendsType[]
}

export type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof sendMessageAC>
