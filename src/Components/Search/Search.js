import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';
import { useTheme } from '../../hooks/useTheme';
import App from '../Carousel/Carousel';
import './search.scss';

export const Search = () => {
	const navigate = useNavigate();
	const elInput = useRef();
	const [search, setSearch] = useSearch();
	const handleFormSubmit = (evt) => {
		evt.preventDefault();
		navigate('/search-author');
		setSearch(elInput.current.value);
	};
	const { t } = useTranslation();
	const [theme] = useTheme();
	return (
		<>
			<div className='search'>
				<div className={`search__inner ${theme}`}>
					<h3 className={`search__title ${theme}`}>{t('search.search')}</h3>
					<form onSubmit={handleFormSubmit} className='search__form'>
						<input
							ref={elInput}
							placeholder={t('search.placeholder')}
							className='search__input'
							type='text'
						/>
						<button type='submit' className={`search__btn ${theme}`}>
							{t('search.quest')}
						</button>
					</form>
				</div>
			</div>
			<App></App>
		</>
	);
};
