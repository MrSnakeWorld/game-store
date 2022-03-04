import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {editUser} from '../../../store/users/actions';
import {extractCurrentUser} from '../../../store/users/selectors';
import useAppSelector from '../useAppSelector';
import useDBInit from './useDBInit';

export default (): {
	loadImage: () => void
} => {
	const dbRequest = indexedDB.open('db', 1);
	const user = useAppSelector(extractCurrentUser);
	const dispatch = useDispatch();

	const loadImage = () => {
		dbRequest.onupgradeneeded = () => {
			const db = dbRequest.result;
			if (!db.objectStoreNames.contains('userImages')) {

				db.createObjectStore('userImages', {keyPath: 'id'});
			}
		};

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