import React from 'react';
import {AspectRatio, Box, Tag, Text, Image, Flex, Center, Tooltip} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import CartButton from '../../../components/CartButton/CartButton';
import Price from '../../../components/Price/Price';
import {IGame} from '../../../tools/interfaces/IGame';

const Game = ({game}: {game: IGame}) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/game/${game.id}`);
	};

	return (
		<Box className="home__game-card" >
			<Box className="clickable" onClick={handleClick}>
				<AspectRatio ratio={18/9} >
					<Image src={game.image} title={game.title} className="home__game-card__image" />
				</AspectRatio>

				<Text className="home__game-card__text">
					{game.title}
				</Text>

				<Center>
					<Flex mb={50} className="home__game-card__genres">
						{game.genres.map(genre => (
							<Tooltip key={genre} label={genre}>
								<Tag
									colorScheme="telegram"
									className="home__game-card__genre"
									textAlign="center"
								>
									{genre}
								</Tag>
							</Tooltip>
						))}
					</Flex>
				</Center>
			</Box>
			<Flex
				position="absolute"
				right={0}
				bottom={0}
				alignItems="center"
				justifyContent="space-between"
				borderRadius={15}
			>
				{game.isCame && (
					<>
						<Price variant="small" price={game.price} discount={game.discount} />
						<CartButton game={game} />
					</>
				)}
			</Flex>

		</Box>
	);
};

export default Game;