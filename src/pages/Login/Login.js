import React, { useRef } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useAuth } from '../../hooks/useAuth';

export const Login = () => {
	const elEmail = useRef();
	const elPassword = useRef();
  const [token, setToken] = useAuth()
	const handleSubmit = (evt) => {
		evt.preventDefault();
		axios
			.post('https://book-service-layer.herokuapp.com/user/login', {
				email: elEmail.current.value,
				password: elPassword.current.value,
			})
			.then(function (response) {
				console.log(response);
        setToken(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	return (
		<div className='login'>
			<div className='container'>
				<div className='login__inner'>
					<h2 className='login__title'>Sign in</h2>
					<p className='login__desc'>
						Do not you have an account?{' '}
						<Link className='login__link' to='/signup'>
							Sign up
						</Link>
					</p>
					<form onSubmit={handleSubmit}>
						<input
							ref={elEmail}
							placeholder='Email'
							type='email'
							className='input'
						/>
						<input
							ref={elPassword}
							placeholder='Password'
							type='password'
							className='input'
						/>
						<button className='signup__btn' type='submit'>
							Next step
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
