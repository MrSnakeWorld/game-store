import React from 'react';
import {IGame} from '../../tools/interfaces/IGame';
import {Button} from '@chakra-ui/react';
import {useDispatch} from 'react-redux';
import {gameToCart} from '../../store/users/actions';
import useAppSelector from '../../tools/hooks/useAppSelector';
import {extractCurrentUser} from '../../store/users/selectors';

const CartButton = ({game}: {game: IGame}) => {
	const dispatch = useDispatch();
	const user = useAppSelector(extractCurrentUser);
	const handleClick = () => {
		dispatch(gameToCart(game));
	};

	return !game.isInCart && !game.isBuyed && user.id !== '_default' ? (
		<Button 
			ml={2}
			backgroundColor="#9ACD32" 
			onClick={handleClick}
			color="white"
		>
			В корзину
		</Button>
	) : game.isInCart ? (
		<Button 
			ml={2}
			backgroundColor="#9ACD32"
			onClick={handleClick}
			color="white"
		>
			Убрать из корзины
		</Button>
	) : user.id !== '_default' ? (
		<Button 
			ml={2}
			backgroundColor="#9ACD32" 
			color="white"
			disabled
		>
			Куплено
		</Button>
	) : null;
};

export default CartButton;