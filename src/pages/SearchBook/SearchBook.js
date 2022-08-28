import React, { useEffect, useState } from 'react';
import { useSearch } from '../../hooks/useSearch';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';
import { BookItem } from '../../Components/BookItem/BookItem';
export const SearchBook = () => {
	const [search] = useSearch();
	const [token] = useAuth();
	const [data, setData] = useState([]);
	console.log(search);
	console.log(token);
	useEffect(() => {
		axios
			.get(
				`https://book-service-layer.herokuapp.com/book/search/?book=${search}`,
			)
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className='container'>
			<ul className='book__list'>
				{data.length ? (
					data.map((e) => <BookItem key={e.id} obj={e} />)
				) : (
					<>UZUR BUNAQA KITOB TOPILMADI</>
				)}
			</ul>
		</div>
	);
};
