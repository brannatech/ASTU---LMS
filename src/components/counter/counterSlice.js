import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    posts: [{ id: 1, title: "Learning react-redux", content: "Redux makes state handling easy for any react project" },
    { id: 2, title: "Learning React js", content: "React js makes web development easier than the way it was before, I love it." },
    ],
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => { state.count += 1 },
        decrement: (state) => { state.count -= 1 },
        incrementByAmount: (state, action) => { state.count += action.payload },
        reset: (state) => { state.count = 0 },
        addPosts: {
            reducer(state, action) {
                state.posts.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                    }
                }
            }

        }
    }
})

export const fetchPosts = (state) => state.counter.posts;

export const { increment, decrement, incrementByAmount, reset, addPosts } = counterSlice.actions;
export default counterSlice.reducer;