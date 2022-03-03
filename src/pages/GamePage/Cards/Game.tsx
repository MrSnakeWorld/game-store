import React from 'react';
import {AspectRatio, Image, Text, Flex, Grid, GridItem} from '@chakra-ui/react';
import CartButton from '../../../components/CartButton/CartButton';
import Price from '../../../components/Price/Price';
import {IGame} from '../../../tools/interfaces/IGame';

const Game = ({game}: {game: IGame}) => (
	<Grid className="game__game-card game__card">
		<GridItem>
			<AspectRatio ratio={18/9} className="game__game-card__image">
				<Image src={game.image} title={game.title} className="game__game-card__image"/>
			</AspectRatio>
		</GridItem>

		<GridItem>
			<Text className="game__game-card__text">
				{game.description}
			</Text>
			<Flex
				position="absolute"
				right={5}
				bottom={5}
				alignItems="center"
				justifyContent="space-between"
				borderRadius={15}
			>
				<Price variant="full" price={game.price} discount={game.discount} />
				<CartButton game={game} />
			</Flex>
		</GridItem>
	</Grid>
);

export default Game;