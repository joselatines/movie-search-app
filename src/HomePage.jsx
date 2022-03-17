import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Navigation } from './shared/Navigation';
import { MovieCard } from './MovieCard';
import { Footer } from './shared/Footer';

export const HomePage = () => {
	const [apiData, setApiData] = useState({});
	const [page, setPage] = useState(1);
	const [endpoint, setEndpoint] = useState('movie/popular');

	const apiURL = 'https://api.themoviedb.org/3';
	const key = '548c10d124719a62a24b2836e287daf6';

	const changePage = (op) => {
		if (page < apiData.total_results && op === 'next') setPage(page + 1);
		else if (page > 1 && op === 'prev') setPage(page - 1);
	};

	useEffect(async () => {
		const response = await fetch(
			`${apiURL}/${endpoint}?api_key=${key}&page=${page}`
		);
		const data = await response.json();

		setApiData(data);
	}, [page, endpoint]);

	return (
		<section>
			<Navigation setEndpoint={setEndpoint} />
			<main>
				<SearchBar placeholder='Search something...' />
				<MoviesContainer>
					{Object.keys(apiData).length !== 0
						? apiData.results.map(({ id, original_title, poster_path }) => (
								<MovieCard
									key={id}
									title={original_title}
									image={poster_path}
								/>
						  ))
						: 'Loading'}
				</MoviesContainer>
			</main>
			<Pagination>
				<button onClick={() => changePage('prev')}>Prev</button>
				<span>{page}</span>
				<button onClick={() => changePage('next')}>Next</button>
			</Pagination>
			<Footer />
		</section>
	);
};

const SearchBar = styled.input`
	all: unset;
	border-radius: 50px;
	background-color: #fff;
	opacity: 0.5;
	color: #000;
	padding: 0.5rem;
	margin: 1rem 0;
	width: 100%;
	&:focus {
		opacity: 1;
	}
`;

const MoviesContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 3rem;
	margin: 2rem 0;
`;

const Pagination = styled.div`
	display: flex;
	gap: 1rem;
`;
