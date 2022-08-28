import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BookItem } from '../../../Components/BookItem/BookItem';

export const Mustaqillik = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get('https://book-service-layer.herokuapp.com/book/genreId/3')
			.then(function (response) {
				setData(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);
	return (
		<div className='book__box'>
			{data.length && (
				<ul className='book__list'>
					{data.map((e) => (
            <BookItem key={e.id} obj={e} />
					))}
				</ul>
			)}
		</div>
	);
};
