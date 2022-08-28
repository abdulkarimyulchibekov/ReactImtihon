import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';
import './AddBook.scss';
export const AddBook = () => {
	const { t } = useTranslation();
	const elId = useRef();
	const [image, setImage] = useState();
	const [preview, setPreview] = useState('');
	const [token] = useAuth();
	const [data, setData] = useState([]);
	const [theme] = useTheme();
	const handleInputChange = () => {
		const id = elId.current?.value;
		if (id > 4 && id <= 0) {
			alert("Iltimos 1 dan 4gacha bo'lgan janr ID kiriting");
		} else {
			axios
				.get(`https://book-service-layer.herokuapp.com/author/genreId/${id}`)
				.then((res) => setData(res.data))
				.catch((err) => console.log(err));
		}
	};

	useEffect(() => {
		if (image) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result);
			};
			reader.readAsDataURL(image);
		} else {
			setPreview('https://via.placeholder.com/350x250');
		}
	}, [image]);

	const handleFormSubmit = (evt) => {
		evt.preventDefault();
		const formData = new FormData();
		const {
			title,
			page,
			year,
			price,
			author_id,
			genre_id,
			description,
			image,
		} = evt.target.elements;
		formData.append('title', title?.value);
		formData.append('page', page?.value);
		formData.append('year', year?.value);
		formData.append('price', price?.value);
		formData.append('author_id', author_id?.value);
		formData.append('genre_id', genre_id?.value);
		formData.append('description', description?.value);
		formData.append('image', image?.files[0]);
		if (+genre_id.value <= 4 && +genre_id.value > 0) {
			axios
				.post(`https://book-service-layer.herokuapp.com/book`, formData, {
					headers: {
						Authorization: token.token,
					},
				})
				.then((res) => {
					console.log(res);
					setPreview('https://via.placeholder.com/350x250');
					title.value = '';
					page.value = '';
					year.value = '';
					price.value = '';
					author_id.value = '';
					genre_id.value = '';
					description.value = '';
				})
				.catch((err) => console.log(err));
		} else {
			alert('Iltimos 0 dan 4gacha son kiriting');
		}
	};

	return (
		<div className='add-auhtor'>
			<form onSubmit={handleFormSubmit} className='add-author__form'>
				<div className={`add-author__left b ${theme}`}>
					<label className='add-author__img-label'>
						<input
							onChange={(evt) => {
								const file = evt.target.files[0];
								if (file && file.type.substr(0, 5) === 'image') {
									setImage(file);
								} else {
									setImage('https://via.placeholder.com/350x250');
								}
							}}
							required
							accept='image/*'
							className='visually-hidden'
							type='file'
							name='image'
						/>
						<img
							className='add-author__img'
							width={350}
							height={250}
							src={preview}
							alt='There will be author image that you will add'
						/>
						<span className='add-author__img-btn'>{t('addAuthor.image')}</span>
					</label>
				</div>

				<div className={`add-author__right a ${theme} `}>
					<h2 className='add-author__title'>{t('addBook.addBook')}</h2>

					<input
						placeholder={t('addBook.title')}
						className='add-author__input'
						required
						type='text'
						name='title'
					/>

					<input
						placeholder={t('addBook.pages')}
						className='add-author__input'
						required
						type='number'
						name='page'
					/>

					<input
						placeholder={t('addBook.year')}
						className='add-author__input'
						required
						type='number'
						name='year'
					/>

					<input
						placeholder={t('addBook.price')}
						className='add-author__input'
						required
						type='number'
						name='price'
					/>

					<input
						placeholder={t('addBook.genre_id')}
						className='add-author__input'
						type='number'
						required
						ref={elId}
						onChange={handleInputChange}
						name='genre_id'
					/>

					{data.length ? (
						<select name='author_id' className='add-author__input'>
							{data.map((e) => (
								<option key={e.id} value={e.id}>
									{e.first_name + ' ' + e.last_name}
								</option>
							))}
						</select>
					) : (
						<></>
					)}

					<textarea
						name='description'
						className='add-author__area'
						placeholder={t('addBook.description')}
					/>
					<button className='add-author__btn' type='submit'>
						{t('addAuthor.create')}
					</button>
				</div>
			</form>
		</div>
	);
};
