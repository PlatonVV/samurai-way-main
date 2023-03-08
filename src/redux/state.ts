import {v1} from 'uuid';

export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string)=>void
    addPost: ()=>void
    subscribe: (callBack: ()=> void) => void
    _onChange: ()=> void
    getState: ()=> RootStateType
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

export const store: StoreType = {
    _state: {
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
    },
    updateNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText
        this._onChange()
    },
    addPost  ()  {
        let newPost: PostsType = {id: v1(), message: this._state.profilePage.newPostText, likesCount: 0}
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this._onChange()
    },
    subscribe (callBack)  {
        this._onChange = callBack;
    },
    _onChange() {
        console.log('state changed')
    },
    getState() {
        return this._state
    }
}











