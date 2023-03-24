
// type stateType = {
//     DialogPage: DialogPageType
//     ProfilePage: ProfilePageType
//     sidebar: SidebarType
// }
//
//
// type DispatchTypeAppPost = {
//     type: 'ADD-POST'
// }
// type DispatchTypeAppNewPostText = {
//     type: 'NEW-POST-TEXT'
//     text: string
// }
// type DispatchTypeAppAddTextMessage = {
//     type: 'ADD-TEXT-MESSAGE'
//     text: string
// }
// type DispatchTypeAppAddMessage = {
//     type: 'ADD-MESSAGE'
//
// }
// type StoreType = {
//     _state: stateType
//     getState: () => stateType
//     _rerenderEntireTree: () => void
//     _addPost: () => void
//     _newPostText: (t: string) => void
//     _addTextMessage: (t: string) => void
//     _addMessages: () => void
//     subscribe: (fn: () => void) => void
//     dispatch: (a: DispatchTypeAppPost | DispatchTypeAppNewPostText | DispatchTypeAppAddTextMessage | DispatchTypeAppAddMessage) => void
// }
// type AllActionsCreators =
//     DispatchTypeAppPost
//     | DispatchTypeAppNewPostText
//     | DispatchTypeAppAddTextMessage
//     | DispatchTypeAppAddMessage
//
//
// const store: StoreType = {
//     _state: {
//         DialogPage: {
//             addMessage: '',
//             dialogsData: [
//                 {id: 3, name: 'Igor'},
//                 {id: 3, name: 'Ivan'},
//                 {id: 3, name: 'Anya'},
//                 {id: 3, name: 'Valera'},
//                 {id: 3, name: 'Alisa'}
//             ],
//             messagesData: [
//                 {id: 3, messages: 'Hi Samurai'},
//                 {id: 3, messages: 'YO YO'},
//                 {id: 3, messages: 'What are you doing?'},
//                 {id: 3, messages: 'Im sleep :))'},
//                 {id: 3, messages: 'Hello samurai'}
//             ],
//         },
//         ProfilePage: {
//             addNewPostText: '',
//             postData: [
//                 {id: 3, text: 'Hello,Its my first post', likeCount: 10},
//                 {id: 3, text: 'yoyoyo', likeCount: 12},
//                 {id: 3, text: 'Welcome samurai', likeCount: 77},
//             ]
//         },
//         sidebar: {
//             friendsData: [
//                 {id: 3, name: 'Igor'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 3, name: 'Sasha'},
//                 {id: 3, name: 'Max'}
//             ]
//         }
//     },
//     getState() {
//         return this._state
//     },
//     _rerenderEntireTree() {
//     },
//     subscribe(observer: () => void) {
//         this._rerenderEntireTree = observer
//
//     },
//     _addPost() {
//         const newPost = {...this._state}
//         newPost.ProfilePage.postData.push({id: 1, text: this._state.ProfilePage.addNewPostText, likeCount: 0})
//         this._state.ProfilePage.addNewPostText = ''
//         this._rerenderEntireTree()
//     },
//     _newPostText(text: string) {
//         this._state.ProfilePage.addNewPostText = text
//         this._rerenderEntireTree()
//     },
//     _addTextMessage(text: string) {
//         this._state.DialogPage.addMessage = text
//         this._rerenderEntireTree()
//     },
//     _addMessages() {
//         let NewMessages = {...this._state}
//         NewMessages.DialogPage.messagesData.push({id: 1, messages: this._state.DialogPage.addMessage},)
//         this._rerenderEntireTree()
//         this._state.DialogPage.addMessage = ''
//     },
//     dispatch(action) {
//         debugger
//         // this._state.ProfilePage = ProfileReducer(this._state.ProfilePage, action)
//         // this._state.DialogPage = DialogsReducer(this._state.DialogPage, action)
//         // this._state.sidebar = SidebarReducer(this._state.sidebar, action)
//
//     }
//
// }

export default () => {}


