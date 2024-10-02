import { Route, Routes } from 'react-router';
import MainPage from './views/pages/MainPage';
import DownloadPage from './views/pages/DownloadPage';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<MainPage />} />
			<Route path='/download' element={<DownloadPage />} />
		</Routes>
	);
};

export default App;
