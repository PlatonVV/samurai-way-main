import {
    followAC,
    initialStateUsersReducerType,
    setCurrentPageAC, setIsFetchingAC,
    setTotalUsersCountAC,
    unFollowAC,
    UsersPageType,
    usersReducer,
} from './usersReducer';
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
                photos: {
                    small: '',
                    large: '',
                },
                photoUrl: 'https://images.mubicdn.net/images/cast_member/4189/cache-5292-1614585191/image-w856.jpg?size=240x',
                followed: true,
                name: 'Platon Volodin',
                status: 'Bla bla car',
                location: {country: 'US', city: 'NewYork'},
            },
            {
                id: idNatalia,
                photos: '',
                photoUrl: 'https://images.mubicdn.net/images/cast_member/4189/cache-5292-1614585191/image-w856.jpg?size=240x',
                followed: false,
                name: 'Natalia Malynych',
                status: 'Bla bla car',
                location: {country: 'Ukraine', city: 'Lvov'},
            },
        ] as Array<UsersPageType>,
        pageSize: 5,
        totalUsersCount: 20,
        currentPage: 5,
        isFetching: false,
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

test('current page should be set', () => {
    const endState = usersReducer(startState, setCurrentPageAC(1))
    expect(endState.currentPage).toBe(1)
})

test('totalUsersCount should be set', () => {
    const endState = usersReducer(startState, setTotalUsersCountAC(1234))

    expect(endState.totalUsersCount).toBe(1234)
})


test('isFetching should be changed', () => {
    const endState = usersReducer(startState, setIsFetchingAC(true))
    expect(endState.isFetching).toBe(true)
})