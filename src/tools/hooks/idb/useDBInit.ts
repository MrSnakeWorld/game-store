import {useEffect} from 'react';
import useDBGet from './useDBGet';

export default (): void => {
	const {loadImage} = useDBGet();

	useEffect(() => {
		const dbRequest = indexedDB.open('db', 1);

		dbRequest.onupgradeneeded = () => {
			const db = dbRequest.result;

			if (!db.objectStoreNames.contains('userImages')) {
				db.createObjectStore('userImages', {keyPath: 'id'});
			}
		};
		
		loadImage();
	}, []);
	
};