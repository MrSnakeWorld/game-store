import {Box, Center, Divider, Heading} from '@chakra-ui/react';
import React from 'react';
import {IGame} from '../../../tools/interfaces/IGame';
import Card from './Card';

const List = ({games}: {games: IGame[]}) => {

	return (
		<Box className="user__list game__card">
			<Center>
				<Heading className="user__list-header">Приобретенные игры</Heading>
			</Center>
			<Divider className="user__list-divider"/>
			{games.map(game => (
				<Card key={game.id} game={game}/>
			))}
		</Box>
	);
};

export default List;