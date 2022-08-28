import React from 'react';
import { Header } from './Components/Header/Header';
import { PublicNav } from './Components/PublicNav/PublicNav';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { SignUp } from './pages/SignUp/SignUp';

export const Public = () => {
	return (
		<div className='public'>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Header>
								<PublicNav />
							</Header>
							<h1 className='title'>Badiiyat Saytimizga Xush kelibsiz</h1>
						</>
					}
				/>
				<Route path='/signup' element={<SignUp />} />
				<Route path='/signin' element={<Login />} />
			</Routes>
		</div>
	);
};
