import React from 'react';
import { Header } from '../../Components/Header/Header';
import { Links } from '../../Components/Links/Links';
import { PrivateNav } from '../../Components/PrivateNav/PrivateNav';
import { Search } from '../../Components/Search/Search';
import { Kitoblar } from '../../Components/Kitoblar/Kitoblar';
import './adiblar.scss';

export const Adiblar = () => {
	return (
		<div>
			<Header>
				<PrivateNav></PrivateNav>
			</Header>
			<Search />
			<Links />
			<Kitoblar />
		</div>
	);
};
