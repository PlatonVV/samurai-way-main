type MessageType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}
type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
type PostsType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostsType>
}
type SidebarType = {}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

let state = {
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
