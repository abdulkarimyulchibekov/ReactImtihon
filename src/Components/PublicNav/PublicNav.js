import React from 'react';
import { Link } from 'react-router-dom';
import "./publicnav.scss"
export const PublicNav = () => {
	return (
		<nav className='header__nav'>
			<Link to='/signin'>
				<button className='header__in'>Sign In</button>
			</Link>
			<Link to="/signup">
				<button className='header__out'>Sign Up</button>
			</Link>
		</nav>
	);
};
