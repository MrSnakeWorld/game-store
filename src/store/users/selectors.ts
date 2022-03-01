import {createSelector} from 'reselect';
import {IState} from '..';

export const extractUsersData = createSelector(
	(state: IState) => state.users,
	data => data
);

export const extractUserById = createSelector(
	extractUsersData,
	(state: IState, userId: string) => userId,
	(data, userId) => data.byId[userId]
);

export const extractUsersAsArray = createSelector(
	extractUsersData,
	data => data.allIds.map(id => ({...data.byId[id]}))
);

export const extractCurrentUser = createSelector(
	extractUsersData,
	data => data.byId[data.currentUser]
);

export const extractUserCart = createSelector(
	extractCurrentUser,
	user => user.cart
);

export const extractUserGames = createSelector(
	extractCurrentUser,
	user => user.games
);