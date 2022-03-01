import {useDisclosure, useToast} from '@chakra-ui/react';
import React, {useState} from 'react';
import genId from '../../tools/genId';
import AuthModal from './AuthModal';
import {ILoginValues} from './components/Login';
import {IRegistrationValues} from './components/Registration';
import {IUser} from '../../tools/interfaces/IUser';
import {useDispatch} from 'react-redux';
import {addUser, loginUser} from '../../store/users/actions';
import useAppSelector from '../../tools/hooks/useAppSelector';
import {extractUsersAsArray} from '../../store/users/selectors';

const useAuthModal = (auth: 'login' | 'registration' = 'registration') => {
	const {onClose, onOpen, isOpen} = useDisclosure();
	const [isAuth, setAuth] = useState(auth);

	const dispatch = useDispatch();
	const users = useAppSelector(extractUsersAsArray);
	const errorToast = useToast();

	const changeAuth = () => setAuth(isAuth === 'login' ? 'registration' : 'login');

	const handleLogin = (values: ILoginValues) => {
		const {email, pass} = values;
		const currentUser = users.find(user => user.email === email && user.pass === pass);
		if (currentUser) {
			dispatch(loginUser(currentUser));
			onClose();
		} else {
			errorToast({
				position: 'bottom',
				title: 'Не верно введен пароль или такого пользователя не существует',
				status: 'error',
				isClosable: true
			});				
		}
	};

	const handleRegistration = (values: IRegistrationValues) => {
		const {name, email, pass} = values;

		const user: IUser = {
			id: genId(),
			name,
			email,
			pass,
			cart: [],
			games: []
		};

		dispatch(addUser(user));
		onClose();
	};

	const modal = (
		<AuthModal
			handleRegistration={handleRegistration}
			handleLogin={handleLogin}
			isAuth={isAuth}
			setAuth={changeAuth}
			isOpen={isOpen}
			onClose={onClose}
		/>
	);

	return {
		modal,
		onOpen,
		setAuth
	};
};

export default useAuthModal;