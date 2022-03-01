import React, {useState} from 'react';
import {Box, Heading, List, ListIcon, ListItem, Stack, Tag, Text, Flex, TagRightIcon, TagCloseButton, Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel} from '@chakra-ui/react';
import {FaRegCircle, FaCircle} from 'react-icons/fa';
import {useDispatch} from 'react-redux';
import {selectCategory, selectGenre} from '../../../store/products/actions';
import {IGame} from '../../../tools/interfaces/IGame';
import {IoClose} from 'react-icons/io5';
import useSize from '../../../tools/hooks/useSize';

const categories = ['Новинки', 'Лидеры продаж', 'Скидки', 'Скоро выйдут'];

interface IFiltersProps {
	genres: string[];
	filters: {
		category: number;
		genres: string[];
	};
}

const Filters = ({genres, filters}: IFiltersProps) => {
	const [selectedCategory, setSelectedCategory] = useState(filters.category);
	const [selectedGenres, setSelectedGenres] = useState<string[]>(filters.genres);
	const {isDesktop} = useSize();

	const dispatch = useDispatch();

	const handleCategory = (i: number) => {
		if (i !== selectedCategory) {
			setSelectedCategory(i);
			dispatch(selectCategory(i));
		} else {
			setSelectedCategory(-1);
			dispatch(selectCategory(-1));
		}	
	};

	const handleGenres = (genre: string) => {
		if (!selectedGenres.find(item => item === genre)) {
			setSelectedGenres([...selectedGenres, genre]);
			dispatch(selectGenre(genre));
		} else {
			setSelectedGenres([...selectedGenres.filter(item => item !== genre)]);
			dispatch(selectGenre(genre));
		}
	};

	return (
		<Box className="home__filters">

			<Accordion defaultIndex={isDesktop ? [0, 1] : []} className="home__filters-categories" allowMultiple>
				<AccordionItem>
					<AccordionButton>
						<Flex justifyContent="space-between" w="100%" alignItems="center" >
							<Heading className="home__filters-categories__header">Категории</Heading>
							<AccordionIcon/>
						</Flex>
					</AccordionButton>
				
					<AccordionPanel>
						<List>
							{categories.map((item, i) => (
								<ListItem key={item} onClick={() => handleCategory(i)} className={
									selectedCategory === i
										? 'home__filters-categories__item active'
										: 'home__filters-categories__item'
								}>
									<Flex pos="relative" alignItems="center">
										<ListIcon as={
											selectedCategory === i
												? FaCircle
												: FaRegCircle
										} />
										{item}
									</Flex>
								</ListItem>
							))}
						</List>
					</AccordionPanel>
				</AccordionItem>
				
				<AccordionItem className="home__filters-genres">
					<AccordionButton>
						<Flex justifyContent="space-between" w="100%" alignItems="center" >
							<Heading className="home__filters-genres__header">Жанры</Heading>
							<AccordionIcon />
						</Flex>
					</AccordionButton>
					<AccordionPanel>
						<Stack direction="column">
							{genres.map(genre => {
								const isSelected = !!selectedGenres.find(item => item === genre);
								return (
									<Tag 
										className={isSelected 
											? 'home__filters-genres__item active' 
											: 'home__filters-genres__item'}
										key={genre} 
										colorScheme="telegram"
										w="100%"
										fontSize={isDesktop ? 'large' : 'larger'}
										variant={isSelected ? 'solid' : 'outline'} 
										onClick={() => handleGenres(genre)}
										justifyContent="space-between"
									>
										{genre}
										{!!isSelected && (
											<TagCloseButton/>
										)}
									</Tag>
								);
							})}
						</Stack>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Box>
	);
};

export default Filters;