import { Carousel } from 'antd';
import React from 'react';
import './carousel.scss';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { useTranslation } from 'react-i18next';

const contentStyle = {
	height: '200px',
	color: '#C9AC8C',
	lineHeight: '160px',
	textAlign: 'center',
	fontSize: '32px',
	background: 'transparent',
	width: '400px',
};

const App = () => {
	const { t } = useTranslation();
	return (
		<Carousel className='carousel' autoplay>
			<div>
				<h3 style={contentStyle}>Temuriylar {t("carousel.davr")} </h3>
			</div>
			<div>
				<h3 style={contentStyle}>Jadid {t("carousel.davr")}</h3>
			</div>
			<div>
				<h3 style={contentStyle}>Sovet {t("carousel.davr")}</h3>
			</div>
			<div>
				<h3 style={contentStyle}>Mustaqilllik {t("carousel.davr")}</h3>
			</div>
		</Carousel>
	);
};

export default App;