import {Avatar, Box, Heading, Menu, MenuButton, MenuGroup, MenuItemOption, MenuList} from '@chakra-ui/react';
import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {logoutUser} from '../../../store/users/actions';
import useSize from '../../../tools/hooks/useSize';
import {IUser} from '../../../tools/interfaces/IUser';

interface IUserAvatarProps {
	user: IUser;
	className: string;
}

const UserAvatar = ({user, className}: IUserAvatarProps) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {isDesktop} = useSize();

	const handleLogout = () => dispatch(logoutUser());

	const handleUser = () => navigate(`/user/${user.id}`);

	return (
		<Box className={className} display="flex" alignItems="center">
			<Menu closeOnBlur closeOnSelect autoSelect={false}>
				<MenuButton as={Avatar} src={user.avatar} name={user.name} className="avatar" />
				<MenuList>
					<MenuGroup title={isDesktop ? '' : user.name} fontWeight="bold" fontSize="xl" pl={3}>
						<MenuItemOption onClick={handleUser}>Личный кабинет</MenuItemOption>
						<MenuItemOption onClick={handleLogout}>Выйти</MenuItemOption>
					</MenuGroup>
				</MenuList>
			</Menu>
			{isDesktop && <Heading size="md" pl={5}>{user.name}</Heading>}
		</Box>
	);
};

export default UserAvatar;