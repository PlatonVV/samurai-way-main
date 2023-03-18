import {v1} from 'uuid';
import {addPostAC, profileReducer} from '../reducers/profileReducer';
import {dialogsReducer, sendMessageAC} from '../reducers/dialogsReducer';
import { sidebarReducer } from '../reducers/sidebarReducer';


 type MessageType = {
    id: string
    message: string
}
 type DialogsType = {
    id: string
    name: string
}
 type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    newMessageBody: string
}
type PostsType = {
    id: string
    message: string
    likesCount: number
}
type ProfilePageType = {
    newPostText: string
    posts: PostsType[]
}
type FriendsType = {
    id: string
    name: string
}
type SidebarType = {
    friends: FriendsType[]
}
type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


 type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (callBack: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}
 type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof sendMessageAC>

 const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: v1(), message: 'Hi, how are you?', likesCount: 12},
                {id: v1(), message: 'This is my first post', likesCount: 11},
                {id: v1(), message: 'Yo Yo Yo Yo', likesCount: 1},
                {id: v1(), message: 'Bla bla bla ', likesCount: 7},
            ],
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Plato'},
                {id: v1(), name: 'Ivan'},
                {id: v1(), name: 'Igor'},
                {id: v1(), name: 'Nikita'},
                {id: v1(), name: 'Cris'},
                {id: v1(), name: 'Neo'},
            ],
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How are you?'},
                {id: v1(), message: 'Whats up!'},
                {id: v1(), message: 'V-vendetta'},
                {id: v1(), message: 'YoYOYO'},
                {id: v1(), message: 'Carnaval jazz!'},
            ],
            newMessageBody: '',
        },
        sidebar: {
            friends: [
                {id: v1(), name: 'Mario'},
                {id: v1(), name: 'Leo'},
                {id: v1(), name: 'Julia'},
            ],
        },
    },
    getState() {
        return this._state
    },
    _onChange() {
    },
    subscribe(callBack) {
        this._onChange = callBack;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._onChange()
    }
}












