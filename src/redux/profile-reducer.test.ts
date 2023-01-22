import profileReducer, {addPostAC, deletePostAC, PostType, ProfileType} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi', likeCounts: 25},
        {id: 2, message: 'My first post', likeCounts: 36},
        {id: 3, message: 'My post', likeCounts: 36},
        {id: 4, message: 'My daas', likeCounts: 36},
    ] as Array<PostType>,
    profile: {} as ProfileType,
    status: ''
}

it('Length of posts should be incremented', () => {
    // 1. Data
    const action = addPostAC('Name post')

    // 2. Action
    const newState = profileReducer(state, action)

    // 3. Expectation
    expect(newState.posts.length).toBe(5)
})

it('Message of posts should be correct', () => {
    // 1. Data
    const action = addPostAC('Name post')

    // 2. Action
    const newState = profileReducer(state, action)

    // 3. Expectation
    expect(newState.posts[4].message).toBe('Name post')
})

it('After deleting length of message should be decrement', () => {
    // 1. Data
    const action = deletePostAC(1)

    // 2. Action
    const newState = profileReducer(state, action)

    // 3. Expectation
    expect(newState.posts.length).toBe(3)
})

it(`After deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. Data
    const action = deletePostAC(100)

    // 2. Action
    const newState = profileReducer(state, action)

    // 3. Expectation
    expect(newState.posts.length).toBe(4)
})