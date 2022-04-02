import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import allInterestService from './allinterestService'

const initialState = {
  allinterests: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}


// Get all user
export const getallinterests = createAsyncThunk('allinterests/getallinterests', async (_, thunkAPI) => {
    try {
        console.log()
      return await allInterestService.getallinterests()
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  })
  


export const AllInterestSlice = createSlice({
  name: 'allinterests',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
    .addCase(getallinterests.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getallinterests.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.allinterests = action.payload
      })
      .addCase(getallinterests.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.allinterests = null
      })
  },
})

export const { reset } = AllInterestSlice.actions
export default AllInterestSlice.reducer