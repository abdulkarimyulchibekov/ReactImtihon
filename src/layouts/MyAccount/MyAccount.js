import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';
import './myaccount.scss';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks/useTheme';

export const MyAccount = () => {
	const [token, setToken] = useAuth();
	const [theme] = useTheme();
	const [data, setData] = useState([]);
	const [account, setAccount] = useState({});

	useEffect(() => {
		axios
			.get(`https://book-service-layer.herokuapp.com/user/me`, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((res) => setAccount(res.data))
			.catch((err) => console.log(err));
	}, [data]);

	const handleFormSubmit = (evt) => {
		evt.preventDefault();
		const formData = new FormData();
		const { image, first_name, last_name, phone } = evt.target.elements;
		formData.append('first_name', first_name.value);
		formData.append('last_name', last_name.value);
		formData.append('phone', phone.value);
		formData.append('image', image.files[0]);
		axios
			.put(`https://book-service-layer.herokuapp.com/user/account`, formData, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	};

	const { t } = useTranslation();

	return (
		<div className={`account ${theme}`}>
			<div className='container'>
				<form onSubmit={handleFormSubmit} className='account__form'>
					<div className='account__left'>
						<label className='account__label'>
							<img
								className='account__image'
								src={
									account.image
										? `https://book-service-layer.herokuapp.com/${account.image}`
										: 'https://via.placeholder.com/200x200'
								}
								width={200}
								height={200}
								alt=''
							/>
							<div className='account__btn'></div>
							<input
								required
								name='image'
								type='file'
								className='account__file visually-hidden'
							/>
						</label>
					</div>

					<div className='account__right'>
						<h2 className={`account__title ${theme}`}> {t('account.my_account')} </h2>
						<label className='first-name__label'>
							<span className='first-name__text'>
								{t('account.first_name')}
							</span>
							<input
								required
								defaultValue={account.first_name}
								type='text'
								name='first_name'
								placeholder='first name'
								className='first-name__input'
							/>
							<span className='first-name__desc'>
								{t('account.first_name_text')}
							</span>
						</label>

						<label className='first-name__label'>
							<span className='first-name__text'>
								{' '}
								{t('account.last_name')}{' '}
							</span>
							<input
								required
								defaultValue={account.last_name}
								type='text'
								name='last_name'
								placeholder='last name'
								className='first-name__input'
							/>
							<span className='first-name__desc'>
								{t('account.last_name_text')}
							</span>
						</label>

						<label className='first-name__label last'>
							<span className='first-name__text'>{t('account.phone')}</span>
							<input
								defaultValue={account.phone}
								required
								type='text'
								name='phone'
								placeholder='phone'
								className='first-name__input'
							/>
							<span className='first-name__desc'>
								{t('account.phone_text')}
							</span>
						</label>
						<button className='account-btn' type='submit'>
							{t('account.save_changes')}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
