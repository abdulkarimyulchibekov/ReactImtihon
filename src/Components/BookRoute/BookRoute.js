import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Jadid } from '../../layouts/KitoblarDavri/Jadid/Jadid';
import { Mustaqillik } from '../../layouts/KitoblarDavri/Mustaqillik/Mustaqillik';
import { Sovet } from '../../layouts/KitoblarDavri/Sovet/Sovet';
import { Temuriylar } from '../../layouts/KitoblarDavri/Temuriylar/Temuriylar';

export const BookRoute = () => {
	return (
		<div>
			<Routes>
				<Route path='temuriylar-davri' element={<Temuriylar/>} />
				<Route path='jadid-adabiyoti' element={<Jadid/>} />
				<Route path='sovet-davri' element={<Sovet/>} />
				<Route path='mustaqillik-davri' element={<Mustaqillik/>} />
			</Routes>
		</div>
	);
};
