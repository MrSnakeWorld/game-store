import {AspectRatio, Box, Grid, GridItem, Heading, Image, Stack, Tag, Text, Flex, Button} from '@chakra-ui/react';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import useSize from '../../../tools/hooks/useSize';
import {IGame} from '../../../tools/interfaces/IGame';

const Card = ({game}: {game: IGame}) => {
	const [isVisible, setVisible] = useState(false);
	const navigate = useNavigate();

	const handleVisible = () => setVisible(!isVisible);

	const handleNavigate = () => navigate(`/game/${game.id}`);

	return (
		<Box>
			<Grid className="user__list-grid" p={2} gap={5}>
				<GridItem onClick={handleNavigate} cursor="pointer">
					<AspectRatio ratio={19/11} >
						<Image src={game.image}/>
					</AspectRatio>
				</GridItem>
				<GridItem>
					<Heading size="md">{game.title}</Heading>
					<Stack className="user__list-grid__stack" direction="row" mt={3}>
						{game.genres.map(genre => (
							<Tag size="md" colorScheme="telegram" key={genre}>
								{genre}
							</Tag>
						))}
					</Stack>

					{isVisible && (
						<Text className="user__list-grid__key" pl={1} mt={5} size="md">{game.key}</Text>
					)}
				</GridItem>
				<Flex 
					alignItems="flex-end"
					alignContent="flex-end"
					justifyContent="flex-end"
					pb={2}
				>	
					<Button 
						backgroundColor="#9ACD32"
						color="white"
						borderRadius={15}
						onClick={handleVisible}
					>
						{!isVisible ? 'Показать ключ' : 'Скрыть ключ'}
					</Button>
				</Flex>
			</Grid>
		</Box>
	);
};

export default Card;