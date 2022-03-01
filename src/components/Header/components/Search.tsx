import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

interface ISearchProps {
	titles: Array<{
		id: string;
		name: string;
	}>;
}

const Search = ({titles}: ISearchProps) => {
	const navigate = useNavigate();

	const handleSelect = ({id}: {id: string, name: string}) => 
		navigate(`/game/${id}`);

	return (
		<div className='header__input'>
			<ReactSearchAutocomplete
				items={titles}
				onSelect={handleSelect}
				styling={{zIndex: 100}}
				placeholder="Поиск"
			/> 
		</div>
	);
};

export default Search;