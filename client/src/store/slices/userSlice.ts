import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type State = {
    userName: string,
    userEmail: string,
    userId: string,
}

const initialState: State = {
    userName: '',
    userEmail: '',
    userId: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<State>) => {
            state.userName = action.payload.userName
            state.userId = action.payload.userId
            state.userEmail = action.payload.userEmail
        }
    },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;