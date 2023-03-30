export type PostsType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    ['posts']: PostsType[]
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
    ['dialogs']: DialogsType[],
    ['messages']: MessageType[],
}
export type FriendsType = {
    id: string
    name: string
}
export type SidebarType = {
    ['friends']: FriendsType[]
}


