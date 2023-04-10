import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import state from './state';

const listenerMiddleware = createListenerMiddleware();

export const store = configureStore({
  devTools:
    process.env.NODE_ENV === 'development'
      ? {
          trace: true,
        }
      : false,
  middleware: (getDefaultMiddleware) => [
    listenerMiddleware.middleware,
    ...getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
    }),
  ],
  reducer: state,
});

export default store;
