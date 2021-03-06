import {createReducer} from '@reduxjs/toolkit';
import {IUser} from '../../tools/interfaces/IUser';
import {IAddUserPayload, IEditUserPayload, IGameToCartPayload, ILoginUserPayload} from './actions';
import * as types from './constants';

interface IUsersById {
	[userId: string]: IUser;
}

export interface IUsersState {
	byId: IUsersById;
	allIds: string[];
	currentUser: string;
}

const defaultUser: IUser = {
	id: '_default',
	name: '',
	email: '',
	pass: '',
	games: [],
	cart: []
};

const defaultUserString = JSON.stringify(defaultUser);

export const getInitialState = (): IUsersState => {
	const byId: IUsersById = {};
	const allIds: string[] = [];
	if (!localStorage.getItem('currentUser')) {
		localStorage.setItem('currentUser', defaultUserString);
	}

	const currentUser = JSON.parse(localStorage.getItem('currentUser') || defaultUserString).id;

	for (let i = 0; i < localStorage.length; i++) {
		const user: IUser = JSON.parse(
			localStorage.getItem(localStorage.key(i) || '') || ''
		);
		
		byId[user.id] = user;
		allIds.push(user.id);
	}

	return {
		byId,
		allIds,
		currentUser
	};
};

const changeLocalStorage = (user: IUser, userId: string) => {
	localStorage.setItem('currentUser', JSON.stringify(user));
	localStorage.setItem(userId, JSON.stringify(user));
};

const usersReducer = createReducer(getInitialState(), {
	[types.ADD_USER]: (state, {payload}: {payload: IAddUserPayload}) => {
		const id = payload.user.id;
		if (!state.allIds.includes(id)) {
			state.allIds.push(id);
			state.byId[id] = payload.user;
			state.currentUser = id;

			changeLocalStorage(payload.user, id);
		}
	},
	[types.EDIT_USER]: (state, {payload}: {payload: IEditUserPayload}) => {
		const currentUser = state.byId[state.currentUser];

		currentUser.name = payload.name;
		currentUser.email = payload.email;
		currentUser.avatar = payload.file;

		changeLocalStorage(currentUser, currentUser.id);
	},
	[types.LOGIN_USER]: (state, {payload}: {payload: ILoginUserPayload}) => {
		state.currentUser = payload.user.id;

		localStorage.setItem('currentUser', JSON.stringify(payload.user));
	},
	[types.LOGOUT_USER]: state => {
		state.currentUser = '_default';

		localStorage.setItem('currentUser', defaultUserString);
	},
	[types.GAME_TO_CART]: (state, {payload}: {payload: IGameToCartPayload}) => {
		const currentUser = state.byId[state.currentUser];

		if (!currentUser.cart.find(game => game.id === payload.game.id)) {
			currentUser.cart.push(payload.game);
		} else {
			currentUser.cart = currentUser.cart.filter(game => game.id !== payload.game.id);
		}

		changeLocalStorage(currentUser, currentUser.id);
	},
	[types.BUY_GAMES]: state => {
		const currentUser = state.byId[state.currentUser];

		currentUser.games.push(...currentUser.cart);
		currentUser.cart = [];

		changeLocalStorage(currentUser, currentUser.id);
	},
	[types.CLEAR_CART]: state => {
		const currentUser = state.byId[state.currentUser];

		currentUser.cart = [];
		
		changeLocalStorage(currentUser, currentUser.id);
	}
});

export default usersReducer;