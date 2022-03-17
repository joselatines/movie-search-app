import styled from 'styled-components';
import variables from './variables.json';
import spain from '../assets/spain.png';

export const Navigation = ({ setEndpoint }) => {
	return (
		<Container>
			<div>
				<a onClick={() => setEndpoint('movie/popular')}>Popular</a>
				<a onClick={() => setEndpoint('movie/upcoming')}>Upcoming</a>
				<a onClick={() => setEndpoint('movie/top_rated')}>Top Rated</a>
			</div>
			<ul>
				<FlagContainer>
					<img src={spain} alt='React Logo' />
				</FlagContainer>
			</ul>
		</Container>
	);
};

const Container = styled.nav`
	display: flex;
	justify-content: space-between;
	gap: 0.5rem;
	background-color: ${variables.colors.bg};
	font-weight: ${variables.font.bold};
	div {
		display: flex;
		gap: 0.8rem;
	}
	ul,
	li {
		list-style-type: none;
		text-decoration: none;
	}
`;

const FlagContainer = styled.li`
	width: 1.5rem;
`;
