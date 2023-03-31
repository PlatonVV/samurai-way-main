import {followAC, initialStateUsersReducerType, setUsersAC, unFollowAC, usersReducer, UsersType} from './usersReducer';
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
                photos: '',
                photoUrl: 'https://images.mubicdn.net/images/cast_member/4189/cache-5292-1614585191/image-w856.jpg?size=240x',
                followed: true,
                name: 'Platon Volodin',
                status: 'Bla bla car',
                location: {country: 'US', city: 'NewYork'},
            },
            {
                id: idNatalia,
                photoUrl: 'https://images.mubicdn.net/images/cast_member/4189/cache-5292-1614585191/image-w856.jpg?size=240x',
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
test('users should be added from server', () => {
    const endState = usersReducer(startState, setUsersAC([{
        id: v1(),
        photos: '',
        photoUrl: 'https://images.mubicdn.net/images/cast_member/4189/cache-5292-1614585191/image-w856.jpg?size=240x',
        followed: false,
        name: 'Erik Bargesyan',
        status: 'Bla bla car',
        location: {country: 'Belarus', city: 'Minsk'},
    }]))

    expect(endState.users[2].name).toBe('Erik Bargesyan')
    expect(endState.users.length).toBe(3)
    expect(endState.users[2].location.city).toBe('Minsk')
})

