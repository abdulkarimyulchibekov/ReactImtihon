import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './PrivateNav.scss';
import { useTranslation } from 'react-i18next';
import accaunt from '../../assets/Images/accaunt.png';
import { useTheme } from '../../hooks/useTheme';

export const PrivateNav = () => {
	const { t } = useTranslation();
	const [theme] = useTheme();
	return (
		<div className='header__children'>
			<nav className='header__nav-secondary'>
				<ul className='header__list'>
					<li className='header__item'>
						<NavLink
							className={({ isActive }) =>
								isActive
									? `header__link active-link ${theme}`
									: `header__link ${theme}`
							}
							to='/'>
							{t('header.authors')}
						</NavLink>
						<span className='header__circle'></span>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? `header__link active-link ${theme}`
									: `header__link ${theme}`
							}
							to='/kitoblar'>
							{t('header.books')}
						</NavLink>
						<span className='header__circle'></span>
					</li>
				</ul>
				<div className=''>
					<Link to='/security'>
						<img src={accaunt} alt='accaunt img' />
					</Link>
				</div>
			</nav>
		</div>
	);
};
