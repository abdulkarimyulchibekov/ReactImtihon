import { useEffect } from 'react';
import { createContext, useState } from 'react';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
	const localData = JSON.parse(localStorage.getItem('token'));
	const [token, setToken] = useState(localData);
	useEffect(() => {
		if (token) {
			localStorage.setItem('token', JSON.stringify(token));
		} else {
			localStorage.removeItem('token');
		}
	}, [token]);
	return (
		<AuthContext.Provider value={{ token, setToken }}>
			{children}
		</AuthContext.Provider>
	);
};
