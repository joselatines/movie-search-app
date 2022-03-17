import styled from 'styled-components';

import reactIcon from '../assets/reactIcon.png';

export const Footer = () => {
	return (
		<Container>
			<ReactSpan>
				React App <img src={reactIcon} alt='' />{' '}
			</ReactSpan>
			<span>
				By{' '}
				<a href='https://github.com/joselatines' target='_blank'>
					Jose Latines
				</a>
			</span>
		</Container>
	);
};

const Container = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 2rem 0;
`;

const ReactSpan = styled.span`
	display: flex;
	align-items: center;
	gap: 5px;
	img {
		width: 1rem;
	}
`;
