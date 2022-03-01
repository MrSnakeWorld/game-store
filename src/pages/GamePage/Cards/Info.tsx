import {Box, Heading, Divider, Text} from '@chakra-ui/react';
import React from 'react';
import {IGame} from '../../../tools/interfaces/IGame';

const Info = ({game}: {game: IGame}) => (
	<Box className="game__info game__card">
		<Heading>Информация</Heading>
		<Divider/>
		<Box className="game__info-content">
			<Text>Языки: {game.languages.join(', ')}</Text>
			<Text>Дата выхода: {game.date}</Text>
			<Text>Разработчик: {game.author}</Text>
			<Text>Издатель: {game.publisher}</Text>
		</Box>
			
	</Box>
);

export default Info;