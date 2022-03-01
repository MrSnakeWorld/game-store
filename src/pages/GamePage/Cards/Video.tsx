import React from 'react';
import {AspectRatio} from '@chakra-ui/react';
import {IGame} from '../../../tools/interfaces/IGame';

const Video = ({game}: {game: IGame}) => (
	<AspectRatio ratio={16/9}>
		<iframe className="game__card" src={game.video} title={game.title}allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
	</AspectRatio>
);

export default Video;