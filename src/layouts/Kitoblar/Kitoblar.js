import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BookRoute } from '../../Components/BookRoute/BookRoute';
import { Header } from '../../Components/Header/Header';
import { LinksBook } from '../../Components/LinksBook/LinksBook';
import { PrivateNav } from '../../Components/PrivateNav/PrivateNav';
import { SearchBooks } from '../../Components/SearchBooks/SearchBooks';
import './kitoblar.scss';
export const Kitoblar = () => {
	return (
		<div>
			<Header>
				<PrivateNav></PrivateNav>
			</Header>
			<SearchBooks />
			<LinksBook />
			<BookRoute />
		</div>
	);
};
