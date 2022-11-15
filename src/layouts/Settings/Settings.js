import React, { useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import './settings.scss';
import Switch from '@mui/material/Switch';
import { useTheme } from '../../hooks/useTheme';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const Settings = () => {
	const { t } = useTranslation();
	const [theme, setTheme] = useTheme();

	return (
		<div className={`settings ${theme}`}>
			<div className={`container`}>
				<h2 className={`settings__title ${theme}`}>{t('settings.settings')}</h2>
				<p className='settings__lang'>{t('settings.language')}</p>
				<select
					className='settings__select'
					defaultValue={'eng'}
					onChange={(evt) => i18next.changeLanguage(evt.target.value)}>
					<option value='uz'>O'zbekcha</option>
					<option value='eng'>English</option>
				</select>
				<p className='settings__desc'>{t('settings.language_text')}</p>
				<p className='settings__theme'>{t('settings.theme')}</p>
				<Switch
					onClick={() => {
						setTheme(!theme);
					}}
					checked={theme}
					{...label}
				/>
			</div>
		</div>
	);
};
