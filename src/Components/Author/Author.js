import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './author.scss';
export const Author = ({ obj }) => {
	const [img, setImg] = useState('');
	useEffect(() => {
		axios
			.get(`https://book-service-layer.herokuapp.com/${obj.image}`)
			.then((res) => setImg(res.name))
			.catch((err) => setImg(err.name));
	}, []);
	return (
		<>
			<li className='author__item'>
				<Link className='author__link' to={`/author/${obj.id}`}>
					<img
						width={200}
						height={150}
						className='author__img'
						src={
							img === 'AxiosError'
								? 'https://via.placeholder.com/200x150'
								: `https://book-service-layer.herokuapp.com/${obj.image}`
						}
						alt={obj.first_name}
					/>
					<h3 className='author__subtitle'>
						{obj.first_name + ' ' + obj.last_name}
					</h3>
					<p className='author__date'>
						{obj.date_of_birth + ' - ' + obj.date_of_death}
					</p>
				</Link>
			</li>
		</>
	);
};
