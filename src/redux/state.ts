export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
export type ProfilePageType = {
    posts: Array<PostsType>
}
export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'This is my first post', likesCount: 11},
            {id: 3, message: 'Yo Yo Yo Yo', likesCount: 1},
            {id: 4, message: 'Bla bla bla ', likesCount: 7},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Plato'},
            {id: 2, name: 'Ivan'},
            {id: 3, name: 'Igor'},
            {id: 4, name: 'Nikita'},
            {id: 5, name: 'Cris'},
            {id: 6, name: 'Neo'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Whats up!'},
            {id: 4, message: 'V-vendetta'},
            {id: 5, message: 'YoYOYO'},
            {id: 6, message: 'Carnaval jazz!'},
        ]
    },
    sidebar: {}
}

export default state;
