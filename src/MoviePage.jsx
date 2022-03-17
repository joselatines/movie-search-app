import styled from 'styled-components';

import { useLocation } from 'react-router-dom';
import { GoHome } from './shared/GoHome';
export const MoviePage = () => {
	const { state } = useLocation();
	const { title, overview, poster_path, release_date, vote_average } = state;

	return (
		<Container>
			<Image>
				<img
					src={`https://image.tmdb.org/t/p/w500${poster_path}`}
					alt={title}
				/>
			</Image>
			<Description>
				<h1>{title ? title : 'No title'}</h1>
				<p>{overview ? overview : 'No sinopsis'}</p>
				<span>Release:{release_date ? release_date : 'No data'}</span>
				<span>Score: {vote_average ? vote_average : 'No data'}/10</span>
			</Description>
			<GoHome />
		</Container>
	);
};

const Container = styled.div`
	display: grid;
	gap: 1rem;
	grid-template-columns: auto auto;
`;

const Image = styled.div`
	width: 25vw;
	img {
		border-radius: 10px;
	}
`;

const Description = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
