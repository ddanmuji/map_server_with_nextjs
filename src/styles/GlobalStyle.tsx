import { css, Global } from '@emotion/react';

import { reset } from './shared/reset';
import { fullSizingStyled } from './shared/util.styles';

const styles = css`
	${reset}

	html,
	body {
		${fullSizingStyled}
	}

	@layer base {
		#__next {
			display: contents;
		}
	}

	a {
		text-decoration: none;
	}
`;

const GlobalStyle = () => {
	return <Global styles={styles} />;
};

export default GlobalStyle;
