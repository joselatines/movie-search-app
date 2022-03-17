import styled from 'styled-components';
import variables from './variables.json';
import spain from '../assets/spain.png';
import us from '../assets/us.png';
import india from '../assets/india.png';

export const Navigation = ({ setEndpoint, setLanguage }) => {
	return (
		<Container>
			<div>
				<a onClick={() => setEndpoint('movie/popular')}>Popular</a>
				<a onClick={() => setEndpoint('movie/upcoming')}>Upcoming</a>
				<a onClick={() => setEndpoint('movie/top_rated')}>Top Rated</a>
			</div>
			<ul>
				<FlagContainer>
					<img onClick={() => setLanguage('es-ES')} src={spain} alt='es-flag' />
				</FlagContainer>
				<FlagContainer>
					<img onClick={() => setLanguage('en-US')} src={us} alt='us-flag' />
				</FlagContainer>
				<FlagContainer>
					<img onClick={() => setLanguage('hi')} src={india} alt='us-flag' />
				</FlagContainer>
			</ul>
		</Container>
	);
};

const Container = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 0.5rem;
	background-color: ${variables.colors.bg};
	font-weight: ${variables.font.bold};
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
	}

	ul {
		display: flex;
		gap: 1rem;
		li:hover {
			opacity: 0.5;
		}
	}

	ul,
	li {
		list-style-type: none;
		text-decoration: none;
	}
`;

const FlagContainer = styled.li`
	width: 1.5rem;
	img {
		cursor: pointer;
	}
`;
