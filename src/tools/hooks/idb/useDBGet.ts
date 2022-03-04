import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {editUser} from '../../../store/users/actions';
import {extractCurrentUser} from '../../../store/users/selectors';
import useAppSelector from '../useAppSelector';

export default (): {
	loadImage: () => void
} => {
	console.log('get');

	const dbRequest = indexedDB.open('db', 1);
	const user = useAppSelector(extractCurrentUser);
	const dispatch = useDispatch();

	const loadImage = () => {
		dbRequest.onsuccess = () => {
			const db = dbRequest.result;
			const userImages 
				= db.transaction('userImages', 'readonly').objectStore('userImages');
					
			const dbRequestGet = userImages.get(user.id);
			dbRequestGet.onsuccess = () => {
				dispatch(editUser(
					user.name,
					user.email,
					URL.createObjectURL(dbRequestGet.result.image)
				));
			};
		};
	};
	
	return {
		loadImage
	};
};