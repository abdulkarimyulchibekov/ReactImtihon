import React from 'react';
import './quote.scss';
import yurak from '../../assets/Images/yurak.svg';
import share from '../../assets/Images/share.svg';

export const Quote = () => {
	return (
		<div className='quote'>
			<blockquote className='quote__quote' cite='www.kun.uz'>
				Unutma, bu dunyoda faqat G'OLIBLAR yutadi MAG'LUBLAR esa yutquzadi.
				To'g'risini aytsam hayotta mag'lublar borligi uchun g'oliblar bo'ladi
			</blockquote>
			<div className='quote__images'>
				<img className='quote__bookmark' src={yurak} alt='bookmark icon' />
				<img className='qoute__share' src={share} alt='share icon' />
			</div>
		</div>
	);
};
