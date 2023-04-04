export type UsersPageType = {
    id: string
    photoUrl: string
    followed: boolean
    name: string
    status: string
    'photos': {
        'small': string | null
        'large': string | null
    }
    location: {
        country: string
        city: string
    }
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type initialStateUsersReducerType = typeof initialState

export type FollowedActionType = ReturnType<typeof followAC>
export type unFollowedActionType = ReturnType<typeof unFollowAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersActionType = ReturnType<typeof setTotalUsersCountAC>
export type setIsFetchingActionType = ReturnType<typeof setIsFetchingAC>

type ActionsType =
    FollowedActionType
    | unFollowedActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersActionType
    | setIsFetchingActionType

const initialState = {
    users: [] as Array<UsersPageType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,

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
            return {...state, users: action.payload.users}
        }
        case 'SET_CURRENT_PAGE': {
            return {
                ...state,
                currentPage: action.payload.currentPage,
            }
        }
        case 'SET_TOTAL_USERS_COUNT': {
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        }
        case 'SET_IS_FETCHING': {
            return {...state, isFetching: action.payload.isFetching}
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
export const setUsersAC = (users: UsersPageType[]) => {
    return {
        type: 'SET_USERS',
        payload: {users},
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: {currentPage},
    } as const
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        payload: {totalUsersCount},
    } as const
}
export const setIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'SET_IS_FETCHING',
        payload: {isFetching},
    } as const
}

