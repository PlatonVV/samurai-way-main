import {v1} from 'uuid';

export type UsersType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: {
        country: string
        city: string
    }
}
export type initialStateUsersReducerType = typeof initialState

export type FollowedActionType = ReturnType<typeof followAC>
export type unFollowedActionType = ReturnType<typeof unFollowAC>
type ActionsType = FollowedActionType | unFollowedActionType
const initialState = {
    users: [
        {
            id: v1(),
            followed: true,
            fullName: 'Platon Volodin',
            status: 'Bla bla car',
            location: {country: 'US', city: 'NewYork'},
        },
        {
            id: v1(),
            followed: false,
            fullName: 'Natalia Malynych',
            status: 'I\'m pregnant',
            country: 'Ukraine',
            city: 'Lvov',
        },
        {id: v1(), followed: false, fullName: 'Illay Avun', status: 'Its on', country: 'Russia', city: 'Moscow'},
    ] as Array<UsersType>,
}

export const usersReducer = (state: initialStateUsersReducerType = initialState, action: ActionsType): initialStateUsersReducerType => {
    switch (action.type) {
        case 'FOLLOWED': {
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: action.payload.follow } : u)}
        }
        case 'UNFOLLOWED': {
            return {...state, users: state.users.map(u=> u.id === action.payload.userId ? {...u, followed: action.payload.unFollow} : u)}
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
export const unFollowAC = (userId: string,unFollow: boolean) => {
    return {
        type: 'UNFOLLOWED',
        payload: {userId,unFollow},
    } as const
}

