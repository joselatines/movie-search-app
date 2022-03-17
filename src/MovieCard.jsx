import styled from 'styled-components';

import variables from './shared/variables.json';

export const MovieCard = ({ title, image }) => {
	return (
		<Container>
			<Image>
				<img src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} />
			</Image>
			<Title>{title}</Title>
		</Container>
	);
};

const Container = styled.div`
	width: 8rem;
	height: 12rem;
	border-radius: 10px;
`;

const Image = styled.div`
	width: 100%;
	height: 100%;
	img {
		border-radius: 10px;
	}
	margin-bottom: 10px;
`;

const Title = styled.h1`
	font-weight: ${variables.font.bold};
	font-size: 1rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
