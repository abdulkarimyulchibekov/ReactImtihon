import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/styles/index.css';
import { AuthProvider } from './Context/AuthContext';
import { SearchProvider } from './Context/SearchContext';
import { ThemeProvider } from './Context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<AuthProvider>
			<SearchProvider>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</SearchProvider>
		</AuthProvider>
	</BrowserRouter>,
);
