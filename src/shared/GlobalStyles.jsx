import { createGlobalStyle } from 'styled-components';
import variables from './variables.json';

export const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	::after {
		margin: 0;
		padding: 0;
		box-sizing: 0;

	}
	body {
		font-family: ${variables.font.style}, Helvetica, sans-serif;
		background-color: ${variables.colors.bg};
		color: ${variables.colors.font};
		padding: 1.5rem;
	}
	a {
		all: unset;
        cursor: pointer;
        &:hover {
            opacity: .6;
        }
	}
	img {
		width: 100%;
		object-fit: cover;
	}

`;
