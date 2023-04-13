import {authReducer, initialStateAuthReducerType, setAuthUserDataAC} from './authReducer';

let startState: initialStateAuthReducerType

beforeEach(() => {
    startState = {
        data: {
            id: 2,
            email: 'blabla@bla.bla',
            login: 'samurai',
            isAuth: false
        },
    }
})

test('correct user-data should be set', () => {
    const endState = authReducer(startState, setAuthUserDataAC(
        {
            id: 1,
            email: 'car@car.car',
            login: 'infinite',
            isAuth: true
        }))

    expect(endState.data.id).toBe(1)
    expect(endState.data.email).toBe('car@car.car')
    expect(endState.data.login).toBe('infinite')
    expect(endState.data.isAuth).toBe(true)
})

