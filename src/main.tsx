import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import './styles/index.css';
import './styles/style.css';

const Main = () => {
	return (
		<main>
			<App />
		</main>
	);
};

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Main />
		</BrowserRouter>
	</StrictMode>
);
