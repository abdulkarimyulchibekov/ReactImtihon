import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookItem } from '../../Components/BookItem/BookItem';
import { Header } from '../../Components/Header/Header';
import { PrivateNav } from '../../Components/PrivateNav/PrivateNav';
import { useAuth } from '../../hooks/useAuth';
import './AuthorPage.scss';
export const AuthorPage = () => {
	const [token, setToken] = useAuth();
	const { id } = useParams();
	const [data, setData] = useState({});
	const [img, setImg] = useState('');
	const [books, setBooks] = useState([]);

	useEffect(() => {
		axios
			.get(`https://book-service-layer.herokuapp.com/author/authorId/${id}`, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		axios
			.get(`https://book-service-layer.herokuapp.com/${data?.image}`)
			.then((res) => setImg(res.name))
			.catch((err) => setImg(err.name));
	}, []);

	useEffect(() => {
		axios
			.get(`https://book-service-layer.herokuapp.com/author/books/${id}`, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((res) => setBooks(res.data))
			.catch((err) => console.log(err));
	}, []);
	return (
		<>
			<Header>
				<PrivateNav></PrivateNav>
			</Header>
			<div className='author-page'>
				<div className='author-page__box'>
					<img
						width={582}
						height={780}
						className='author-page__img'
						src={
							img !== 'AxiosError'
								? `https://book-service-layer.herokuapp.com/${data?.image}`
								: 'https://via.placeholder.com/582x780'
						}
						alt='auhtor image'
					/>
				</div>
				<div className='author-page__body'>
					<h2 className='author-page__title'>
						{data?.first_name + ' ' + data?.last_name}
					</h2>
					<p className='author-page__bio'>{data.bio}</p>
					<div className='book'>
						<p className='book__text'>Asarlari</p>
						<p className='book__sublink'>
							<Link className='book__sublink' to='/kitoblar'>
								Barchasini ko’rish
							</Link>
						</p>
					</div>
					{books?.length && (
						<ul className='book__list'>
							{books.map((e) => (
								<BookItem obj={e} key={e.id} />
							))}
						</ul>
					)}
				</div>
			</div>
			<div className='date'>
				<div className='date__box1'>
					<span className='date__desc'>Tavallud sanasi</span>
					<p className='date__main '>{data.date_of_birth}</p>
					<span className='date__desc'>Toshkent, Uzbekistan</span>
				</div>
				<p className='date__main date__line'>-</p>
				<div className='date__box2'>
					<span className='date__desc'>O'lgan sanasi</span>
					<p className='date__main'>{data.date_of_death}</p>
					<span className='date__desc'>Toshkent, Uzbekistan</span>
				</div>
			</div>
		</>
	);
};
