import {Box, Flex, Heading, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Button, Text} from '@chakra-ui/react';
import React from 'react';
import {IoCartSharp} from 'react-icons/io5';
import {useDispatch} from 'react-redux';
import {buyGames} from '../../../store/users/actions';
import {IUser} from '../../../tools/interfaces/IUser';
import GameCard from '../../GameCard/GameCard';
import {CgSmileSad} from 'react-icons/cg';

const Cart = ({user}: {user: IUser}) => {
	const dispatch = useDispatch();
	const handleBuy = () => {
		dispatch(buyGames());
	};

	return (
		<Box className="header__cart">
			<Popover>
				<PopoverTrigger>
					<Flex className="clickable">
						<Heading position="absolute" top={2} right={14}>{!!user.cart.length && user.cart.length}</Heading>
						<IoCartSharp className="header__cart-icon"/>
					</Flex>
				</PopoverTrigger>
				<PopoverContent minW="50vw">
					<PopoverArrow />
					<PopoverHeader>
						<Heading size="lg">Корзина</Heading>
					</PopoverHeader>
					<PopoverBody>
						{user.cart.map(game => (
							<GameCard key={game.id} game={game}/>
						))}
						{!user.cart.length && (
							<Flex alignItems="flex-end">
								<Text mr={2}>Корзина пока что пуста </Text>
								<CgSmileSad size={26}/>
							</Flex>
						)}
					</PopoverBody>

					<PopoverFooter>
						<Flex justifyContent="flex-end">
							<Button onClick={handleBuy} bgColor="#9ACD32" color="white">Приобрести</Button>
						</Flex>
					</PopoverFooter>
				</PopoverContent>
			</Popover>
		</Box>
	);
};

export default Cart;