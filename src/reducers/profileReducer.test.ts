import {v1} from 'uuid';
import {
    addPostAC,
    initialStateProfileReducerType,
    UsersType,
    profileReducer,
    UserProfileType,
    setUserProfileAC,
} from './profileReducer';

let startState: initialStateProfileReducerType

beforeEach(() => {
        startState = {
            posts: [
                {id: v1(), message: 'Hi, how are you?', likesCount: 12},
                {id: v1(), message: 'This is my first post', likesCount: 11},
                {id: v1(), message: 'Yo Yo Yo Yo', likesCount: 1},
                {id: v1(), message: 'Bla bla bla ', likesCount: 7},
            ] as Array<UsersType>,
            profile: {
                aboutMe: 'я круто чувак 1001%',
                contacts: {
                    facebook: 'facebook.com',
                    website: null,
                    vk: 'vk.com/dimych',
                    twitter: 'https://twitter.com/@sdf',
                    instagram: 'instagra.com/sds',
                    youtube: null,
                    github: 'github.com',
                    mainLink: null,
                },
                lookingForAJob: true,
                lookingForAJobDescription: 'не ищу, а дурачусь',
                fullName: 'samurai dimych',
                userId: 2,
                photos: {
                    small: 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0',
                    large: 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0',
                },
            } as unknown as UserProfileType,

        }
    },
)

test('new post should be added', () => {
    const endState = profileReducer(startState, addPostAC('NEW MESSAGE'))
    expect(endState.posts[0].message).toBe('NEW MESSAGE')
})

test('correct users should be set', () => {
    const endState = profileReducer(startState, setUserProfileAC({
        'aboutMe': 'sdfsdfsdf',
        'contacts': {
            'facebook': null,
            'website': null,
            'vk': null,
            'twitter': null,
            'instagram': null,
            'youtube': null,
            'github': null,
            'mainLink': null,
        },
        'lookingForAJob': false,
        'lookingForAJobDescription': null,
        'fullName': 'AlexanderKhodaryonok',
        'userId': 3,
        'photos': {
            'small': null,
            'large': null,
        },
    } as unknown as UserProfileType))
    expect(endState.profile.userId).toBe(3)
    expect(endState.profile.aboutMe).toBe('sdfsdfsdf')
})