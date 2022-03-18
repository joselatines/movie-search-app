import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Navigation } from './shared/Navigation';
import { MovieCard } from './MovieCard';
import { Footer } from './shared/Footer';
import { Link } from 'react-router-dom';
import variables from './shared/variables.json';

export const HomePage = () => {
	const [apiData, setApiData] = useState({});
	const [page, setPage] = useState(null);
	const [language, setLanguage] = useState('');
	const [endpoint, setEndpoint] = useState('');
	const [searchValue, setSearchValue] = useState('');

	const apiURL = 'https://api.themoviedb.org/3';
	const key = '548c10d124719a62a24b2836e287daf6';

	useEffect(async () => {
		const response = await fetch(
			`${apiURL}/${
				!endpoint ? 'movie/popular' : endpoint
			}?api_key=${key}&page=${!page ? 1 : page}&language=${language}`
		);
		const data = await response.json();

		setApiData(data);
	}, [page, endpoint, language]);

	// Pagination
	const changePage = (op) => {
		if (page < apiData.total_results && op === 'next') setPage(page + 1);
		else if (page > 1 && op === 'prev') setPage(page - 1);
	};

	const changeSearchBar = async (e) => {
		setSearchValue(e.target.value);

		try {
			const response = await fetch(
				`${apiURL}/search/movie?api_key=${key}&query=${searchValue}&language=${language}`
			);

			if (response.ok) {
				const data = await response.json();
				setApiData(data);
			} else if (response.status === 422) {
				console.log('Not Found');
			} else console.log('Something went wrong');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section>
			<Navigation setEndpoint={setEndpoint} setLanguage={setLanguage} />
			<main>
				<SearchBar
					placeholder='Search something...'
					onChange={changeSearchBar}
					value={searchValue}
				/>
				<MoviesContainer>
					{
						// Wait until data is ready
						Object.keys(apiData).length !== 0
							? apiData.results.map(
									(el) =>
										// Only show elements tha has a poster
										el.poster_path && (
											<Link state={el} to={`movie/${el.id}`} key={el.id}>
												<MovieCard title={el.title} image={el.poster_path} />
											</Link>
										)
							  )
							: 'Loading'
					}
				</MoviesContainer>
				<Pagination>
					<button onClick={() => changePage('prev')}>Prev</button>
					<span>{page}</span>
					<button onClick={() => changePage('next')}>Next</button>
				</Pagination>
			</main>

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
	align-items: center;
	justify-content: center;
	gap: 1rem;
	margin-top: 5rem;
	button {
		all: unset;
		cursor: pointer;
		padding: 0.5rem 1rem;
		background-color: ${variables.colors.primary};
	}
`;
