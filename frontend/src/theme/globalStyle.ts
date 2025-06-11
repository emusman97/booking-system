import { createGlobalStyle } from 'styled-components';
import type { DefaultTheme } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
     html, body {
       font-family: ${({ theme }) => theme.typography.fontFamily.base};
       font-size: ${({ theme }) => theme.typography.fontSize.base};
       font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
       line-height: ${({ theme }) => theme.typography.lineHeight.normal};
       color: ${({ theme }) => theme.colors.text.primary};
     }

     *, *:before, *:after {
       box-sizing: inherit;
     }

     h1, h2, h3, h4, h5, h6, p, ul, ol, li {
       margin: 0;
       padding: 0;
     }
   `;
