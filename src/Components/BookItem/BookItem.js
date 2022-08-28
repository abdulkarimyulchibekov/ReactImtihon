import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BookItem.scss';

export const BookItem = ({ obj }) => {
	const [img, setImg] = useState('');
	useEffect(() => {
		axios
			.get(`https://book-service-layer.herokuapp.com/${obj?.image}`)
			.then((res) => setImg(res))
			.catch((err) => setImg(err));
	}, []);
	console.log(img);
	return (
		<li className='book__item'>
			<Link className='book__link' to={`/book/${obj.id}`} >
				<img
					className='book__img'
					width={170}
					height={250}
					src={
						img.name !== 'AxiosError'
							? `https://book-service-layer.herokuapp.com/${obj?.image}`
							: 'https://via.placeholder.com/170x250'
					}
					alt=''
				/>
				<p className='book__title'>{obj.title}</p>
			</Link>
		</li>
	);
};
