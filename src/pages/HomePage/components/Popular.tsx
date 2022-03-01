import React, {useState} from 'react';
import {AspectRatio, Box, Center, Heading, Image} from '@chakra-ui/react';
import {IGame} from '../../../tools/interfaces/IGame';
import Slider, {Settings} from 'react-slick';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import classNames from 'classnames';
import {useNavigate} from 'react-router-dom';
import useSize from '../../../tools/hooks/useSize';

const Popular = ({games}: {games: IGame[]}) => {
	const popular = games.filter(game => game.isLeader);
	const navigate = useNavigate();
	const {isDesktop} = useSize();

	const [imageIndex, setImageIndex] = useState(0);
	const handleChange = (current: number, next: number) => setImageIndex(next);

	const handleClick = (game: IGame, id: number) => {
		if (id === imageIndex) {
			navigate(`/game/${game.id}`);
		}
	};
	
	const settings: Settings = {
		infinite: true,
		autoplay: true,
		dots: true,
		pauseOnDotsHover: true,
		pauseOnHover: true,
		centerMode: true,
		draggable: false,
		speed: 300,
		slidesToShow: isDesktop ? 3 : 1,
		centerPadding: '0',
		className: 'home__popular-slider',
		nextArrow: <IoIosArrowForward color="black"/>,
		prevArrow: <IoIosArrowBack color="black" />,
		beforeChange: handleChange
	};

	const classes = (id: number) => classNames('home__popular-slider__image', {
		active: id === imageIndex
	});

	return (
		<Box className="home__popular">
			<Center>
				<Heading className="home__popular-header">Популярные проекты</Heading>
			</Center>
			<Center>
				<Slider
					{...settings}
				>
					{popular.map((game, id) => (
						<AspectRatio
							onClick={() => handleClick(game, id)}
							className={classes(id)}
							maxW={800}
							key={game.id}
							ratio={18/9}
						>
							<Image src={game.image} title={game.title}/>
						</AspectRatio>
					))}
				</Slider>
			</Center>
		</Box>
	);
};

export default Popular;
