import {IconButton, Link, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Text} from '@chakra-ui/react';
import React from 'react';
import useSize from '../../../tools/hooks/useSize';
import {FiMenu} from 'react-icons/fi';

interface IEnterMenuProps {
	onOpen: () => void;
	setAuth: React.Dispatch<React.SetStateAction<'login' | 'registration'>>;
}

const EnterMenu = ({onOpen, setAuth}: IEnterMenuProps) => {
	const {isDesktop} = useSize();

	const handleLogin = () => {
		setAuth('login');
		onOpen();
	};

	const handleRegistration = () => {
		setAuth('registration');
		onOpen();
	};


	return isDesktop ? (
		<div className="header__user-login">
			<Text>
				<Link onClick={handleLogin}>Вход</Link>
						&nbsp;/&nbsp;
				<Link onClick={handleRegistration}>Регистрация</Link>
			</Text>
		</div>
	) : (
		<Menu closeOnBlur closeOnSelect autoSelect={false}>
			<MenuButton 
				as={IconButton} 
				aria-label="Options" 
				icon={<FiMenu />}
				variant="outline"
				className="header__user-login"
			/>
			<MenuList textAlign="center">
				<MenuGroup title="Авторизация" fontWeight="bold" fontSize="xl">
					<MenuItem justifyContent="center">
						<Link onClick={handleLogin}>Вход</Link>
					</MenuItem>
					<MenuItem justifyContent="center">
						<Link onClick={handleRegistration}>Регистрация</Link>
					</MenuItem>
				</MenuGroup>
			</MenuList>
		</Menu>
	);
};

export default EnterMenu;