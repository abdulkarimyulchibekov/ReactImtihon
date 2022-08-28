import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';
import App from '../Carousel/Carousel';
export const SearchBooks = () => {
	const navigate = useNavigate();
	const elInput = useRef();
	const [search, setSearch] = useSearch();
	const handleFormSubmit = (evt) => {
		evt.preventDefault();
		navigate('/search-book');
		setSearch(elInput.current.value);
	};
	const { t } = useTranslation();

	return (
		<>
			<div className='search'>
				<div className='search__inner'>
					<h3 className='search__title'> {t('search.search')} </h3>
					<form onSubmit={handleFormSubmit} className='search__form'>
						<input
							ref={elInput}
							placeholder={t("search.placeholder")}
							className='search__input'
							type='text'
						/>
						<button type='submit' className='search__btn'>
							{t('search.quest')}
						</button>
					</form>
				</div>
			</div>
			<App></App>
		</>
	);
};
