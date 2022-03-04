import React, {useEffect} from 'react';
import {Avatar, Box, Text, Center, Grid, GridItem, Heading} from '@chakra-ui/react';
import {ImArrowLeft2} from 'react-icons/im';
import {useNavigate, useParams} from 'react-router-dom';
import {extractCurrentUser, extractUserById} from '../../store/users/selectors';
import useAppSelector from '../../tools/hooks/useAppSelector';
import Info from './components/Info';
import './UserPage.css';
import List from './components/List';
import {BiUpload} from 'react-icons/bi';
import useDBAdd from '../../tools/hooks/idb/useDBAdd';

const UserPage = () => {
	const {id} = useParams<{id: string}>();
	const user = useAppSelector(s => extractUserById(s, id || ''));
	const currentUser = useAppSelector(extractCurrentUser);
	const navigate = useNavigate();

	const {addImage} = useDBAdd();

	useEffect(() => {
		if (currentUser.id === '_default') {
			navigate('/');
		}
	}, [currentUser]);

	const handleBack = () => navigate('/');

	return (
		<Box className="user">
			<Center className="user__title">
				<Heading>Личный кабинет</Heading>
				<ImArrowLeft2 className="user__back" onClick={handleBack}/>
			</Center>
			<Grid className="user__grid">
				<GridItem className="user__grid-avatar">
					<Avatar 
						className="user__grid-avatar__image"
						size="full"
						fontSize={200}
						name={user.name} 
						src={user.avatar}
					/>
					<div className="user__grid-avatar__change user__grid-avatar">
						<label htmlFor="upload-avatar" className="user__grid-avatar__change-label" >
							<Center>
								<BiUpload className="user__grid-avatar__change-icon"/>
							</Center>
							<Text textAlign="center" >Выберите файл</Text>
						</label>
						<input id="upload-avatar" type="file" accept="image/*" onChange={addImage}/>
					</div>
				</GridItem>
				<GridItem className="user__grid-info">
					<Info user={user} />
				</GridItem>
			</Grid>
			<Box className="user__list-container">
				<List games={user.games}/>
			</Box>
		</Box>
	);
};

export default UserPage;