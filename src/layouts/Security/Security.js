import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';
import './security.scss';
export const Security = () => {
	const { t } = useTranslation();
	const elPassword = useRef();
	const [theme] = useTheme();
	const [token] = useAuth();
	const [data, setData] = useState({});
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
		const { email, currentPassword, newPassword } = evt.target.elements;
		formData.append('email', email?.value);
		formData.append('currentPassword', currentPassword?.value);
		formData.append('newPassword', newPassword?.value);
		console.log(newPassword?.value);
		console.log(elPassword.current?.value);
		if (newPassword?.value == elPassword.current?.value) {
			axios
				.put(
					`https://book-service-layer.herokuapp.com/user/security`,
					formData,
					{
						headers: {
							Authorization: token.token,
						},
					},
				)
				.then((res) => {
					console.log(res.data);
					console.log(res);
					email.value = account.email;
					currentPassword.value = '';
					newPassword.value = '';
					elPassword.current.value = '';
				})
				.catch((err) => console.log(err));
		} else {
			alert("Iltimos parolni to'g'ri kiriting");
		}
	};

	return (
		<div className={`account ${theme}`}>
			<div className='container sec'>
				<form onSubmit={handleFormSubmit} className='sec__form'>
					<h2 className={`sec__title account__title ${theme}`}>{t('security.title')}</h2>

					<label className='first-name__label'>
						<span className='first-name__text'>{t('security.email')}</span>
						<input
							required
							defaultValue={account.email}
							type='text'
							name='email'
							className='first-name__input'
						/>
						<span className='first-name__desc'>{t('security.email_text')}</span>
					</label>

					<label className='first-name__label'>
						<span className='first-name__text'>
							{t('security.current_password')}
						</span>
						<input
							required
							type='password'
							name='currentPassword'
							className='first-name__input'
						/>
						<span className='first-name__desc'>
							{t('security.current_password_text')}
						</span>
					</label>

					<div className='sec__bottom'>
						<label className='first-name__label'>
							<span className='first-name__text'>
								{t('security.new_password')}
							</span>
							<input
								required
								type='password'
								name='newPassword'
								className='first-name__input'
							/>
							<span className='first-name__desc'>
								{t('security.new_password_text')}
							</span>
						</label>

						<label className='first-name__label'>
							<span className='first-name__text'>
								{t('security.confirm_password')}
							</span>
							<input
								ref={elPassword}
								required
								type='password'
								name='confirmPassword'
								className='first-name__input'
							/>
							<span className='first-name__desc'>
								{t('security.confirm_password_text')}
							</span>
						</label>
					</div>

					<button className='account-btn' type='submit'>
						{t('account.save_changes')}
					</button>
				</form>
			</div>
		</div>
	);
};
