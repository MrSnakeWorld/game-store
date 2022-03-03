import React from 'react';
import {Box, Center, Divider, Grid, GridItem, Heading} from '@chakra-ui/react';
import {extractFilteredGamesAsArray, extractGamesAsArray, extractGamesData, extractGenresAsArray} from '../../store/products/selectors';
import useAppSelector from '../../tools/hooks/useAppSelector';
import Cards from './components/Cards';
import Filters from './components/Filters';
import Popular from './components/Popular';
import './HomePage.css';
import ReactGA from 'react-ga';

const HomePage = () => {
	ReactGA.pageview('/');

	const games = useAppSelector(extractGamesAsArray);
	const {filters} = useAppSelector(extractGamesData);
	const filteredGames = useAppSelector(extractFilteredGamesAsArray);
	const genres = useAppSelector(extractGenresAsArray);

	return (
		<Box className="home">
			<Popular games={games}/>
			<Divider mb={30}/>
			<Grid className="home__grid" gap={20}>
				<GridItem>
					<Filters genres={genres} filters={filters}/>
				</GridItem>
				<GridItem>
					<Center>
						<Heading mb={30}>Список игр:</Heading>
					</Center>
					<Cards games={filteredGames} />
				</GridItem>
			</Grid>
		</Box>
	);
};

export default HomePage;