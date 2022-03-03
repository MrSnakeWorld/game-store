import {createSelector} from 'reselect';
import {IState} from '..';
import {IGame} from '../../tools/interfaces/IGame';
import {extractCurrentUser} from '../users/selectors';
import {IGamesById} from './reducers';

export const extractGamesData = createSelector(
	(state: IState) => state.products,
	extractCurrentUser,
	(data, user) => {
		const byId: IGamesById = {};
		const allIds: string[] = data.games.allIds;
		const filters = data.games.filters;
		const selectedGame = data.games.selectedGame;

		data.games.allIds.forEach(id => byId[id] = {
			...data.games.byId[id],
			isInCart: !!user.cart?.find(game => game.id === data.games.byId[id].id),
			isBuyed: !!user.games?.find(game => game.id === data.games.byId[id].id)
		});

		return {
			byId,
			allIds,
			filters,
			selectedGame
		};
	}
);

export const extractGameById = createSelector(
	(state: IState, gameId: string) => gameId,
	extractGamesData,
	(gameId, data) => data.byId[gameId]
);

export const extractGenresAsArray = createSelector(
	(state: IState) => state.products,
	data => data.genres
);

export const extractGamesAsArray = createSelector(
	extractGamesData,
	games => games.allIds.map(gameId => ({...games.byId[gameId]}))
);

export const extractFilteredGamesAsArray = createSelector(
	extractGamesAsArray,
	extractGamesData,
	(games, data) => {
		const filteredGames: IGame[] = [];
		switch(data.filters.category) {
		case 0: 
			filteredGames.push(...games.filter(game => game.isNovice));
			break;
		case 1:
			filteredGames.push(...games.filter(game => game.isLeader));
			break;
		case 2:
			filteredGames.push(...games.filter(game => game.discount));
			break;
		case 3:
			filteredGames.push(...games.filter(game => !game.isCame));
			break;			
		}			

		if (!filteredGames.length) {
			filteredGames.push(...games);
		}

		return data.filters.genres.length 
			? filteredGames.filter(game => game.genres.find(genre => 
				data.filters.genres.find(item => item === genre)))
			: filteredGames;
	}
);

export const extractGameTitlesAsArray = createSelector(
	extractGamesAsArray,
	games => games.map(game => ({id: game.id, name: game.title}))
);