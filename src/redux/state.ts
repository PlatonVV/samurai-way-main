import {v1} from 'uuid';

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
export type FriendsType = {
    id: string
    name: string
}
export type SidebarType = {
    friends: FriendsType[]
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export const state: RootStateType = {
    profilePage: {
        newPostText: '',
        posts: [
            {id: v1(), message: 'Hi, how are you?', likesCount: 12},
            {id: v1(), message: 'This is my first post', likesCount: 11},
            {id: v1(), message: 'Yo Yo Yo Yo', likesCount: 1},
            {id: v1(), message: 'Bla bla bla ', likesCount: 7}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Plato'},
            {id: v1(), name: 'Ivan'},
            {id: v1(), name: 'Igor'},
            {id: v1(), name: 'Nikita'},
            {id: v1(), name: 'Cris'},
            {id: v1(), name: 'Neo'}
        ],
        messages: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How are you?'},
            {id: v1(), message: 'Whats up!'},
            {id: v1(), message: 'V-vendetta'},
            {id: v1(), message: 'YoYOYO'},
            {id: v1(), message: 'Carnaval jazz!'}
        ]
    },
    sidebar: {
        friends: [
            {id: v1(), name: 'Mario'},
            {id: v1(), name: 'Leo'},
            {id: v1(), name: 'Julia'}
        ]
    }
}

let onChange = ()=>{
}
export const subscribe = (callBack: ()=> void) => {
    onChange = callBack;
}
export const addPost = () => {
    let newPost: PostsType = {id: v1(), message: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    onChange()
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    onChange()
}









