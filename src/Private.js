import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { PrivateNav } from './Components/PrivateNav/PrivateNav';
import { Adiblar } from './layouts/Adiblar/Adiblar';
import { Kitoblar } from './layouts/Kitoblar/Kitoblar';
import { AuthorPage } from './pages/AuthorPage/AuthorPage';
import { BookPage } from './pages/BookPage/BookPage';
import { SearchAuthor } from './pages/SearchAuthor/SearchAuthor';
import { SearchBook } from './pages/SearchBook/SearchBook';
import { Security } from './pages/Security/Security';
import { useTranslation } from 'react-i18next';
import { useTheme } from './hooks/useTheme';

export const Private = () => {
	const {t} = useTranslation();
	const [theme] = useTheme();
	return (
		<div className={`private ${theme}`}>
			<Routes>
				<Route path='/security/*' element={<Security />} />
				<Route path='/*' element={<Adiblar />} />
				<Route path='author/:id' element={<AuthorPage />} />
				<Route path='/kitoblar/*' element={<Kitoblar />} />
				<Route path='/search-book' element={<SearchBook />} />
				<Route path='/search-author' element={<SearchAuthor />} />
				<Route path='book/:num' element={<BookPage />} />
				<Route path='/*/*' element={<>404 error</>} />
			</Routes>
		</div>
	);
};
