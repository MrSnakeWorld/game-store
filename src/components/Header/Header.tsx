import React, {useState} from 'react';
import './Header.css';
import {IoCartSharp} from 'react-icons/io5';
import UserAvatar from './components/UserAvatar';
import useAppSelector from '../../tools/hooks/useAppSelector';
import {extractGamesAsArray, extractGameTitlesAsArray} from '../../store/products/selectors';
import Search from './components/Search';
import Cart from './components/Cart';
import {extractCurrentUser} from '../../store/users/selectors';
import {Link, Text} from '@chakra-ui/react';
import EnterMenu from './components/EnterMenu';

interface IHeaderProps {
	onOpen: () => void;
	setAuth: React.Dispatch<React.SetStateAction<'login' | 'registration'>>;
}

const Header = ({onOpen, setAuth}: IHeaderProps) => {
	const titles = useAppSelector(extractGameTitlesAsArray);
	const user = useAppSelector(extractCurrentUser);


	return (
		<div className="header">
			{user.id!== '_default' ? (
				<UserAvatar
					user={user}
					className="header__user-avatar"
				/>
			) : (
				<EnterMenu 
					onOpen={onOpen}
					setAuth={setAuth}
				/>
			)}

			<Search titles={titles} />

			<Cart user={user}/>
		</div>
	);
};

export default Header;