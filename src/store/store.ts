import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { remindMeSlice } from './remind-me';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        remindMe: remindMeSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
