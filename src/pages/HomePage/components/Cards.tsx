import {Flex, Wrap, WrapItem} from '@chakra-ui/react';
import React from 'react';
import Game from './Game';
import {IGame} from '../../../tools/interfaces/IGame';

const Cards = ({games}: {games: IGame[]}) => {

	return (
		<Wrap spacing="30px" className='home__cards'>
			{games.map(game => (
				<WrapItem className="home__card" key={game.id}>
					<Game game={game}/>
				</WrapItem>
			))}
		</Wrap>
	);
};

export default Cards;