import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './signup.scss';
import { useNavigate } from 'react-router-dom'



export const SignUp = () => {
	const navigate = useNavigate();
  const firstName = useRef();
  const lastName = useRef();
  const phone = useRef();
  const email = useRef();
  const password = useRef();
  const [token, setToken] = useAuth()
	const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(phone.current.value);
		axios
			.post('https://book-service-layer.herokuapp.com/user/register', {
        "first_name": firstName.current.value,
        "last_name": lastName.current.value,
        "phone": phone.current.value,
        "email": email.current.value,
        "password": password.current.value
      })
			.then(function (response) {
        setToken(response.data);
				console.log(response);
				navigate("/")
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	return (
		<div className='signup'>
			<div className='container'>
				<div className='signup__inner'>
					<h2 className='signup__title'>Sign up</h2>
					<p className='signup__desc'>
						Already have an account?{' '}
						<Link className='signup__link' to='/signin'>
							Sign in
						</Link>
					</p>
					<form onSubmit={handleSubmit}>
						<input ref={firstName} type='text' className='input' placeholder='First name' />
						<input ref={lastName} type='text' className='input' placeholder='Last name' />
						<input ref={phone} type='text' maxLength={9} className='input' placeholder='Phone' />
						<input ref={email} type='email' className='input' placeholder='Email' />
						<input ref={password} type='password' className='input' placeholder='Password' />
						<button className='signup__btn' type='submit'>
							Next step
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
