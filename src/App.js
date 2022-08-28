import { useAuth } from './hooks/useAuth';
import { Public } from './Public';
import { Private } from './Private';
import i18n from 'i18next';
import { Lang } from './lang/Lang';
import { initReactI18next } from 'react-i18next';
i18n.use(initReactI18next).init({
	fallbackLng: 'eng',
	interpolation: {
		escapeValue: false,
	},
	resources: {
		eng: { translation: Lang.eng },
		uz: { translation: Lang.uz },
	},
});

function App() {
	const [token] = useAuth();
	if (token) {
		return <Private />;
	}
	return <Public />;
}

export default App;
