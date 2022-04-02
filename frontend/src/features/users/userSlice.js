import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import UserService from './userService'


const initialState = {
  allUsers: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}


// Get all user
export const getUsers = createAsyncThunk('allusers/getallusers', async (_, thunkAPI) => {
    try {
        console.log()
      return await UserService.getallusers()
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  })
  


export const AllUserSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
    .addCase(getUsers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.allUsers = action.payload
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.allUsers = null
      })
  },
})

export const { reset } = AllUserSlice.actions
export default AllUserSlice.reducer