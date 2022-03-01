import {BreadcrumbLink} from '@chakra-ui/react';
import {createReducer} from '@reduxjs/toolkit';
import GAMES from '../../tools/games';
import {IGame} from '../../tools/interfaces/IGame';
import {ISelectCategoryPayload, ISelectGamePayload, ISelectGenrePayload} from './actions';
import * as types from './constants';

export interface IGamesById {
	[gameId: string]: IGame;
}

export interface IProductsState {
	games: {
		byId: IGamesById;
		allIds: string[];
		selectedGame?: string;
		filters: {
			category: number;
			genres: string[];
		}
	};
	genres: string[];
}

export const getInitialState = (): IProductsState => {
	const byId: IGamesById = {};
	const allIds: string[] = [];
	const genres: Set<string> = new Set;

	for (const game of GAMES) {
		byId[game.id] = game;
		allIds.push(game.id);

		game.genres.forEach(genre => genres.add(genre));
	}

	return {
		games: {
			byId,
			allIds,
			selectedGame: undefined,
			filters: {
				category: -1,
				genres: []
			}
		},
		genres: Array.from(genres)
	};
};

const productReducer = createReducer(getInitialState(), {
	[types.SELECT_GAME]: (state, {payload}: {payload: ISelectGamePayload}) => {
		if (state.games.allIds.includes(payload.gameId)) {
			state.games.selectedGame = payload.gameId;
		}
	},
	[types.SELECT_CATEGORY]: (state, {payload}: {payload: ISelectCategoryPayload}) => {
		state.games.filters.category = payload.categoryId;
	},
	[types.SELECT_GENRE]: (state, {payload}: {payload: ISelectGenrePayload}) => {
		if (!state.games.filters.genres.find(item => item === payload.genre)) {
			state.games.filters.genres.push(payload.genre);
		} else {
			state.games.filters.genres = state.games.filters.genres.filter(item => item !== payload.genre);
		}
	}
});

export default productReducer;