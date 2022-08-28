import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import './Links.scss';
import { useTheme } from '../../hooks/useTheme';

export const Links = () => {
	const { t } = useTranslation();
	const [theme] = useTheme();
	return (
		<div className='links'>
			<h2 className={`links__title ${theme}`}> {t('links.main')} </h2>
			<ul className='links__list'>
				<li className='links__item'>
					<NavLink
						className={({ isActive }) =>
							isActive ? `link links__link ${theme}` : `links__link ${theme}`
						}
						to='temuriylar-davri'>
						Temuriylar {t('links.period')}{' '}
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? `link links__link ${theme}` : `links__link ${theme}`
						}
						to='jadid-adabiyoti'>
						Jadid {t('links.literature')}{' '}
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? `link links__link ${theme}` : `links__link ${theme}`
						}
						to='sovet-davri'>
						Sovet {t('links.period')}{' '}
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? `link links__link ${theme}` : `links__link ${theme}`
						}
						to='mustaqillik-davri'>
						Mustaqillik {t('links.period')}
					</NavLink>
				</li>
			</ul>
		</div>
	);
};
