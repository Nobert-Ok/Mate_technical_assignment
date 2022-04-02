import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import InterestSlice from '../features/interests/interestSlice';
import AllUserSlice from '../features/users/userSlice';
import AllInterestSlice from '../features/allinterest/allinterestSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    interests: InterestSlice,
    allusers: AllUserSlice,
    allinterests: AllInterestSlice,
  },
});
