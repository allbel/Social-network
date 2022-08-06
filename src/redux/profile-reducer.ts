import {ActionType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi', likeCounts: 25},
        {id: 2, message: 'My first post', likeCounts: 36},
        {id: 3, message: 'My post', likeCounts: 36},
        {id: 4, message: 'My daas', likeCounts: 36},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likeCounts: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export type ActionProfileType =
    ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>

export const addPostActionCreator = () => {
    return {type: ADD_POST} as const
}

export const updateNewPostTextActionCreator = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text} as const
}

export default profileReducer