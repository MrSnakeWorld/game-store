import {combineReducers, configureStore} from '@reduxjs/toolkit';
import productReducer from './products/reducers';
import usersReducer from './users/reducers';


const rootReducer = combineReducers({
	products: productReducer,
	users: usersReducer
});

export const store = configureStore({
	reducer: rootReducer
});

export type IState = ReturnType<typeof rootReducer>;