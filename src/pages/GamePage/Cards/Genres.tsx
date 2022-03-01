import {Box, Divider, Heading, Stack, Tag} from '@chakra-ui/react';
import React from 'react';

const Genres = ({genres}: {genres: string[]}) => (
	<Box className="game__card game__genres">
		<Heading>Жанры</Heading>
		<Divider/>
		<Stack className="game__genres-stack">
			{genres.map(genre => (
				<Tag size="lg" colorScheme="telegram" key={genre}>
					{genre}
				</Tag>
			))}
		</Stack>
	</Box>
);

export default Genres;