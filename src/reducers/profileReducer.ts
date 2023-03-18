import {v1} from 'uuid';
import {ActionsType, PostsType, ProfilePageType} from '../generalTypes/GeneralTypes';


const initialState: ProfilePageType = {
    newPostText: '',
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 12},
        {id: v1(), message: 'This is my first post', likesCount: 11},
        {id: v1(), message: 'Yo Yo Yo Yo', likesCount: 1},
        {id: v1(), message: 'Bla bla bla ', likesCount: 7},
    ],
}

export const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newMessage = action.payload.message
            let newPost: PostsType = {id: v1(), message: newMessage, likesCount: 0}
            state.posts.push(newPost);
            state.newPostText = ''
            return state
        }
        default:
            return state
    }
}

export const addPostAC = (message: string) =>
    ({type: 'ADD-POST', payload:  {message}} as const)