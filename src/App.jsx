import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from './HomePage';
import { MoviePage } from './MoviePage';
import { GlobalStyles } from './shared/GlobalStyles';
import { NotFoundPage } from './NotFoundPage';

export const App = () => {
	return (
		<main>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/movie' element={<Navigate to='/' />} />
					<Route path='movie/:movieID' element={<MoviePage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>

			<GlobalStyles />
		</main>
	);
};
