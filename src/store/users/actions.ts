import {IGame} from '../../tools/interfaces/IGame';
import {IUser} from '../../tools/interfaces/IUser';
import * as types from './constants';

export interface IAddUserPayload {
	user: IUser;
}

export const addUser = (user: IUser) => ({
	type: types.ADD_USER,
	payload: {user}
});

export interface IEditUserPayload {
	name: string;
	email: string;
}

export const editUser = (name: string, email: string) => ({
	type: types.EDIT_USER,
	payload: {name, email}
});

export interface ILoginUserPayload {
	user: IUser;
}

export const loginUser = (user: IUser) => ({
	type: types.LOGIN_USER,
	payload: {user}
});

export const logoutUser = () => ({
	type: types.LOGOUT_USER
});

export interface IGameToCartPayload {
	game: IGame;
}

export const gameToCart = (game: IGame) => ({
	type: types.GAME_TO_CART,
	payload: {game}
});

export const buyGames = () => ({
	type: types.BUY_GAMES
});