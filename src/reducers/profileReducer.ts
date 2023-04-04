import {v1} from 'uuid';

export type AddPostActionType = ReturnType<typeof addPostAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfileAC>

type ActionsType = AddPostActionType | SetUserProfileActionType

export type UserProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small?: string
        large?: string

    }
}
export type UsersType = {
    id: string
    message: string
    likesCount: number

}
export type initialStateProfileReducerType = typeof initialState
const initialState = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 12},
        {id: v1(), message: 'This is my first post', likesCount: 11},
        {id: v1(), message: 'Yo Yo Yo Yo', likesCount: 1},
        {id: v1(), message: 'Bla bla bla ', likesCount: 7},
    ] as Array<UsersType>,
    profile: null as unknown as UserProfileType
}

export const profileReducer = (state: initialStateProfileReducerType = initialState, action: ActionsType): initialStateProfileReducerType => {
    switch (action.type) {
        case 'ADD-POST': {
            return {...state, posts: [{id: v1(), message: action.payload.message, likesCount: 7}, ...state.posts]}
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.payload.profile  }
        }
        default:
            return state
    }
}

export const addPostAC = (message: string) =>
    ({type: 'ADD-POST', payload: {message}} as const)
export const setUserProfileAC = (profile: UserProfileType )=> {
    return {
        type: 'SET-USER-PROFILE',
        payload: {profile}
    } as const
}

