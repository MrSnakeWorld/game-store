import {Box, Heading, Divider, Text} from '@chakra-ui/react';
import React from 'react';
import genId from '../../../tools/genId';
import {IDescription} from '../../../tools/interfaces/IDescription';

const Description = ({description}: {description: IDescription[]}) => (
	<Box className="game__description game__card">
		<Heading>Об этой игре</Heading>
		<Divider/>
		<Box className="game__description-content">
			{description.map(item => (
				<>
					<Heading size="lg" className="game__description-header" key={genId()} >
						{item.header}
					</Heading>
					<Text className="game__description-body" key={genId()}>
						{item.body}
					</Text>
				</>
			))}
		</Box>
	</Box>
);

export default Description;