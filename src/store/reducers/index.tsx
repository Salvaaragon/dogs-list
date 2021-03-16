import { combineReducers } from 'redux';
import { DogsReducer } from './dogs';

export const rootReducer = combineReducers({
  dogsReducer: DogsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
