type LocationUser = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationUser
}

type UsersPageType = {
    users: Array<UserType>
}

const initialState: UsersPageType = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://banner2.cleanpng.com/20180430/jge/kisspng-computer-icons-font-awesome-hamburger-button-5ae723a4ebfc72.3953800615250973809666.jpg',
        //     followed: false, fullName: 'Aleksandr', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://banner2.cleanpng.com/20180430/jge/kisspng-computer-icons-font-awesome-hamburger-button-5ae723a4ebfc72.3953800615250973809666.jpg',
        //     followed: true, fullName: 'Dmitry', status: 'I am a boss too', location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://banner2.cleanpng.com/20180430/jge/kisspng-computer-icons-font-awesome-hamburger-button-5ae723a4ebfc72.3953800615250973809666.jpg',
        //     followed: false, fullName: 'Viktor', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'}
        // },
    ]
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const usersReducer = (state: UsersPageType = initialState, action: ActionUsersType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}


export type ActionUsersType =
    ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

export const followAC = (userID: number) => ({type: FOLLOW, userID} as const)

export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID} as const)

export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)


export default usersReducer