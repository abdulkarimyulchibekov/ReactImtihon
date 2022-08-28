import React from 'react';
import { NavLink } from 'react-router-dom';
import { SecurityBody } from '../../Components/Security/SecurityBody/SecurityBody';
import { SecurityNav } from '../../Components/Security/SecurityNav/SecurityNav';
import './security.scss';
export const Security = () => {
	return (
		<div className='security'>
			<SecurityNav />
      <SecurityBody />
		</div>
	);
};
