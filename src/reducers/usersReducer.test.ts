import {followAC, initialStateUsersReducerType, unFollowAC, usersReducer, UsersType} from './usersReducer';
import {v1} from 'uuid';

let idPlato: string
let idNatalia: string

let startState: initialStateUsersReducerType

beforeEach(() => {
    idPlato = v1()
    idNatalia = v1()
    startState = {
        users: [
            {
                id: idPlato,
                followed: true,
                fullName: 'Platon Volodin',
                status: 'Bla bla car',
                location: {country: 'US', city: 'NewYork'},
            },
            {
                id: idNatalia,
                followed: false,
                fullName: 'Natalia Malynych',
                status: 'I\'m pregnant',
                country: 'Ukraine',
                city: 'Lvov',
            },
        ] as Array<UsersType>,
    }
})

test('correct user should be followed', () => {
    const endState = usersReducer(startState, followAC(idNatalia, true))
    expect(endState.users[1].followed).toBe(true)
})
test('correct user should be unFollowed', () => {
    const endState = usersReducer(startState, unFollowAC(idPlato, false))

    expect(endState.users[0].followed).toBeFalsy()
})


