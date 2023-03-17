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
    newMessageBody: string
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

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof sendMessageAC>
export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (callBack: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export const addPostAC = (message: string) => ({type: 'ADD-POST', message} as const)
export const updateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText} as const)
export const sendMessageAC = (message: string) => ({type: 'SEND_MESSAGE', message} as const)
export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: 'It-kamasutra',
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
        if (action.type === 'ADD-POST') {
            let newPost: PostsType = {id: v1(), message: this._state.profilePage.newPostText, likesCount: 0}
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._onChange()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._onChange()
        } else if (action.type === 'SEND_MESSAGE') {
            let body = action.message;
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: v1(), message: body})
            this._onChange()
        }
            // } else if (action.type === 'ADD-POST-DIALOG') {
            //     let dialogsPost: MessageType = {id: v1(), message: this._state.dialogsPage.newMessageBody}
            //     this._state.dialogsPage.messages.push(dialogsPost);
            //     this._state.dialogsPage.newDialogsPost = ''
            //     this._onChange()

            },


}











