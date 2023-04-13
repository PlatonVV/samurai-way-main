export type setUserDataActionType = ReturnType<typeof setAuthUserDataAC>
export type ActionType = setUserDataActionType
export type UserDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type initialStateAuthReducerType = typeof initialState

const initialState = {
    data: {
        id: null,
        email: null,
        login: null,
        isAuth: false
    } as UserDataType,
}

export const authReducer = (state: initialStateAuthReducerType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {...state,
                data: action.payload.data,
            }
        }
        default:
            return state
    }
}

export const setAuthUserDataAC = (data: {id: number, email: string, login: string, isAuth: boolean}) => {
    return {
        type: 'SET_USER_DATA',
        payload: {data},
    } as const
}