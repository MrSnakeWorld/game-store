import {Flex, Box, Image, Heading, Stack, Text, Tag, AspectRatio, Grid, GridItem, Button} from '@chakra-ui/react';
import classNames from 'classnames';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import useSize from '../../tools/hooks/useSize';
import {IGame} from '../../tools/interfaces/IGame';
import Price from '../Price/Price';

interface IGameCardProps {
	game: IGame;
	inCart?: boolean;
}

const GameCard = ({game, inCart}: IGameCardProps) => {
	const [isVisible, setVisible] = useState(false);
	const navigate = useNavigate();
	const {isDesktop} = useSize();

	const handleVisible = () => setVisible(!isVisible);

	const handleNavigate = () => navigate(`/game/${game.id}`);

	return (
		<Box>
			<Grid templateColumns={'20% auto 20%'} p={2} gap={5}>
				<GridItem onClick={handleNavigate} cursor="pointer">
					<AspectRatio ratio={19/11} >
						<Image src={game.image}/>
					</AspectRatio>
				</GridItem>
				<GridItem onClick={handleNavigate} cursor="pointer">
					<Heading size="md">{game.title}</Heading>
					{isDesktop && (
						<Stack direction="row" mt={3}>
							{game.genres.map(genre => (
								<Tag size="md" colorScheme="telegram" key={genre}>
									{genre}
								</Tag>
							))}
						</Stack>
					)}
					{isVisible && (
						<Text pl={1} mt={5} size="md">{game.key}</Text>
					)}
				</GridItem>
				<Flex 
					alignItems="flex-end"
					alignContent="flex-end"
					justifyContent="flex-end"
					pb={2}
				>
					{inCart ? (
						<Button 
							backgroundColor="#9ACD32"
							color="white"
							borderRadius={15}
							onClick={handleVisible}
						>
							{!isVisible ? 'Показать ключ' : 'Скрыть ключ'}
						</Button>
					) : (
						<Price price={game.price} discount={game.discount} variant="small"/>
					)}
				</Flex>
			</Grid>
		</Box>
	);
};

export default GameCard;