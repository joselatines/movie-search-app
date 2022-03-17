import { useLocation } from 'react-router-dom';
import { GoHome } from './shared/GoHome';
export const MoviePage = () => {
	const { state } = useLocation();
	const {
		title,
		genre_ids,
		overview,
		poster_path,
		release_date,
		vote_average,
	} = state;

	return (
		<main>
			<h1>{title}</h1>
			<GoHome />
		</main>
	);
};
