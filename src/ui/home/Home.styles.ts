import { css } from '@emotion/css';
import { text, textgradient } from '@mixins';

export const h1 = css`
		${text({ size: 4.5, weight: 500, height: 5 })}
		margin-bottom: 20px;
		letter-spacing: 0.1rem;
		${textgradient()};
		filter: drop-shadow(3px 3px 5px #000);
	`;