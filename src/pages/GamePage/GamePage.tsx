import React from 'react';
import {Box, Center, Grid, GridItem, Heading} from '@chakra-ui/react';
import {useNavigate, useParams} from 'react-router-dom';
import {extractGameById} from '../../store/products/selectors';

import useAppSelector from '../../tools/hooks/useAppSelector';
import './GamePage.css';
import Video from './Cards/Video';
import Genres from './Cards/Genres';
import Description from './Cards/Description';
import Requirements from './Cards/Requirements';
import Info from './Cards/Info';
import {ImArrowLeft2} from 'react-icons/im';
import Game from './Cards/Game';

const GamePage = () => {
	const {id} = useParams<{id: string}>();
	const game = useAppSelector(s => extractGameById(s, id || ''));
	const navigate = useNavigate();

	const handleBack = () => navigate('/');

	return (
		<Box className="game">
			<Center className="game__title" textAlign="center">
				<Heading className="game__title-header">{game.title}</Heading>
				<ImArrowLeft2 className="game__back" onClick={handleBack}/>
			</Center>

			<Grid className="game__start" gap={10}>
				<GridItem className="game__start-video">
					<Video game={game}/>
				</GridItem>

				<GridItem className="game__start-game">
					<Game game={game} />
				</GridItem>
			</Grid>

			<Genres genres={game.genres}/>
			{game.requirements && (
				<Description description={game.fullDescription} />
			)}
			
			<Grid className="game__footer" gap={10}>
				<GridItem className="game__footer-requirements">
					{game.requirements ? (
						<Requirements game={game} />
					) : (
						<Description description={game.fullDescription} />
					)}
				</GridItem>
				<GridItem className="game__footer-info">
					<Info game={game} />
				</GridItem>
			</Grid>
		</Box>
	);
};

export default GamePage;