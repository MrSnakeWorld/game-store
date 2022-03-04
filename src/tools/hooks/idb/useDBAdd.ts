import React from 'react';
import {useDispatch} from 'react-redux';
import {editUser} from '../../../store/users/actions';
import {extractCurrentUser} from '../../../store/users/selectors';
import useAppSelector from '../useAppSelector';

export default (): {
	addImage: (e: React.ChangeEvent<HTMLInputElement>) => void
} => {
	console.log('add');

	const user = useAppSelector(extractCurrentUser);
	const dispatch = useDispatch();

	const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

		const dbRequest = indexedDB.open('db', 1);

		dbRequest.onsuccess = () => {
			const db = dbRequest.result;
			const userImages 
				= db.transaction('userImages', 'readwrite').objectStore('userImages');
			userImages.delete(user.id);
			userImages.add({id: user.id, image: file});

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
		addImage
	};
};