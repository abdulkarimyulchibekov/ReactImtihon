import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Subtract from '../../assets/Images/Subtract.svg';
import './BookPage.scss';
import tablet from '../../assets/Images/tablet.svg';
import naushnik from '../../assets/Images/naushnik.svg';
import book from '../../assets/Images/book.svg';
import { Quote } from '../../Components/Quote/Quote';
import { BookList } from '../../Components/BookList/BookList';
import { Header } from '../../Components/Header/Header';
import { PrivateNav } from '../../Components/PrivateNav/PrivateNav';


export const BookPage = () => {
	const [token, setToken] = useAuth();
	const [data, setData] = useState({});
	const { num } = useParams();
	useEffect(() => {
		axios
			.get(`https://book-service-layer.herokuapp.com/book/bookId/${num}`, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, [num]);
	const [img, setImg] = useState('');
	useEffect(() => {
		axios
			.get(`https://book-service-layer.herokuapp.com/${data?.image}`)
			.then((res) => setImg(res))
			.catch((err) => setImg(err));
	}, [num]);
	console.log(img.name);
	return (
		<>
			<Header>
				<PrivateNav></PrivateNav>
			</Header>
			<div className='container page'>
				<img
					className='page__img'
					width={520}
					height={810}
					src={
						img.name === 'AxiosError'
							? `https://book-service-layer.herokuapp.com/${data?.image}`
							: 'https://via.placeholder.com/520x810'
					}
					alt='book image'
				/>
				<div className='page__body'>
					<h2 className='page__title'>{data.title}</h2>
					<p className='text'>
						Sahifalar soni {'  '}
						<span className='number'>{data.page}</span>
					</p>
					<p className='text'>
						Chop etilgan yili <span className='number'>{data.year}</span>
					</p>
					<p className='text'>
						Narxi : <span className='number'>{data.price}$</span>
					</p>
					<div className='page__box'>
						<h3 className='page__subtitle'>
							To’liq ma’lumot <img src={Subtract} alt='' />
						</h3>
						<div className='page__line'></div>
					</div>
					<p className='page__bio'>{data.description}</p>
					<div className='format'>
						<p className='format__title'>Mavjud formatlar</p>
						<ul className='format__list'>
							<li className='format__item'>
								<img className='format__icon' src={book} alt='' />
								<p className='format__type'>Qog’oz kitob</p>
								<p className='format__price'>{data.price * 11000 + " so'm"}</p>
							</li>
							<li className='format__item'>
								<img className='format__icon' src={naushnik} alt='' />
								<p className='format__type'>Qog’oz kitob</p>
								<p className='format__price'>6:23 soat</p>
							</li>
							<li className='format__item'>
								<img className='format__icon' src={tablet} alt='' />
								<p className='format__type'>Qog’oz kitob</p>
								<p className='format__price'>pdf, epub</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='container'>
				<ul className='list'>
					<li className='list__item'>
						<Link className='list__link' to={`/author/${data.author_id}`}>
							Muallif haqida
						</Link>
					</li>
					<li className='list__item'>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'list__link active-page' : 'list__link'
							}
							to={''}>
							Kitobdan iqtiboslar
						</NavLink>
					</li>
				</ul>
				<Routes>
					<Route index element={<Quote />} />
				</Routes>
				<p className='you__like'>Sizga yoqishi mumkin</p>
				<BookList id={data.id} />
			</div>
		</>
	);
};
