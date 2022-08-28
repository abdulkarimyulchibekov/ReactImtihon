import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export const LinksBook = () => {
	const { t } = useTranslation();
	return (
		<div className='links'>
			<h2 className='links__title'>{t("links.main")}</h2>
			<ul className='links__list'>
				<li className='links__item'>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'link links__link' : 'links__link'
						}
						to='temuriylar-davri'>
						Temuriylar {t("links.period")}{' '}
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'link links__link' : 'links__link'
						}
						to='jadid-adabiyoti'>
						Jadid {t("links.literature")}{' '}
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'link links__link' : 'links__link'
						}
						to='sovet-davri'>
						Sovet {t("links.period")}{' '}
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'link links__link' : 'links__link'
						}
						to='mustaqillik-davri'>
						Mustaqillik {t("links.period")}
					</NavLink>
				</li>
			</ul>
		</div>
	);
};
