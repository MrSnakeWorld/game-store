import * as types from './constants';

export interface ISelectGamePayload {
	gameId: string;
}

export const selectGame = (gameId: string) => ({
	type: types.SELECT_GAME,
	payload: {gameId}
});

export interface ISelectCategoryPayload {
	categoryId: number;
}

export const selectCategory = (categoryId: number) => ({
	type: types.SELECT_CATEGORY,
	payload: {categoryId}
});

export interface ISelectGenrePayload {
	genre: string;
}

export const selectGenre = (genre: string) => ({
	type: types.SELECT_GENRE,
	payload: {genre}
});