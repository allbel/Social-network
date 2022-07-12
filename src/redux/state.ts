export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likeCounts: number
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likeCounts: 25},
            {id: 2, message: 'My first post', likeCounts: 36},
            {id: 3, message: 'My post', likeCounts: 36},
            {id: 4, message: 'My daas', likeCounts: 36},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Viktor'},
            {id: 5, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Yo'},
        ],
    }
}

export const addPost = (postMessage: string) => {
    let newPost: PostType = {
        id: 5,
        message: postMessage,
        likeCounts: 0
    }
    state.profilePage.posts.push(newPost)
}

export default state