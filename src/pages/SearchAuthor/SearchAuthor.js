import React, { useEffect, useState } from 'react';
import { useSearch } from '../../hooks/useSearch';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';
import { BookItem } from '../../Components/BookItem/BookItem';
import { Author } from '../../Components/Author/Author';

export const SearchAuthor = () => {
	const [search] = useSearch();
	const [token] = useAuth();
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get(
				`https://book-service-layer.herokuapp.com/author/search/?author=${search}`,
			)
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className='container'>
			<ul style={{paddingTop: 50}} className='book__list'>
				{data.length ? (
					data.map((e) => <Author key={e.id} obj={e} />)
				) : (
					<>UZUR BUNAQA KITOB TOPILMADI</>
				)}
			</ul>
		</div>
	);
};
