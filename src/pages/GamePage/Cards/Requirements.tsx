import {Box, Divider, Grid, GridItem, Text, Heading} from '@chakra-ui/react';
import React from 'react';
import genId from '../../../tools/genId';
import {IGame} from '../../../tools/interfaces/IGame';

const Requirements = ({game}: {game: IGame}) => (
	<Box className="game__requirements game__card">
		<Heading>Системные требования</Heading>
		<Divider/>
		<Grid className="game__requirements-content" gap={5}>
			{game.requirements.map(item => (
				<GridItem key={genId()}>
					<Heading size="md">{item.type}:</Heading>
					<Text>ОС: {item.OS}</Text>
					<Text>Процессор: {item.CPU}</Text>
					<Text>Оперативная память: {item.RAM}</Text>
					<Text>Видеокарта: {item.GPU}</Text>
					<Text>DirectX: {item.DirectX}</Text>
					<Text>Место на диске: {item.Size} GB</Text>
				</GridItem>
			))}
		</Grid>
	</Box>
);

export default Requirements;