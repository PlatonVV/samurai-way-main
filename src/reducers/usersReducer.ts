import {v1} from 'uuid';

export type UsersType = {
    id: string
    photoUrl: string
    followed: boolean
    name: string
    status: string
    photos: any
    location: {
        country: string
        city: string
    }
}
export type initialStateUsersReducerType = typeof initialState

export type FollowedActionType = ReturnType<typeof followAC>
export type unFollowedActionType = ReturnType<typeof unFollowAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>

type ActionsType = FollowedActionType | unFollowedActionType | setUsersActionType
const initialState = {
    users: [] as Array<UsersType>,
}

export const usersReducer = (state: initialStateUsersReducerType = initialState, action: ActionsType): initialStateUsersReducerType => {
    switch (action.type) {
        case 'FOLLOWED': {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId
                    ? {...u, followed: action.payload.follow}
                    : u),
            }
        }
        case 'UNFOLLOWED': {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId
                    ? {...u, followed: action.payload.unFollow}
                    : u),
            }
        }
        case 'SET_USERS': {
            return {...state, users: [...state.users, ...action.payload.users]}
        }
        default:
            return state
    }
}
export const followAC = (userId: string, follow: boolean) => {
    return {
        type: 'FOLLOWED',
        payload: {userId, follow},
    } as const
}
export const unFollowAC = (userId: string, unFollow: boolean) => {
    return {
        type: 'UNFOLLOWED',
        payload: {userId, unFollow},
    } as const
}
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: 'SET_USERS',
        payload: {users},
    } as const
}

