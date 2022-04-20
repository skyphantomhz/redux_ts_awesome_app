import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { applyMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import counterReducer from '../feature/counter/counterSlice'
import rootSaga from './appsaga';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
