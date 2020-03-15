import { createGlobalStyle } from 'styled-components'

/**
 * Applies global styles to /pages/_app.js
 *
 * https://www.styled-components.com/docs/api#createglobalstyle
 */
export default createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
  
    margin: 0px;
    padding: 0px;
  
    background-color: ${props => props.theme.page.background};
    color: ${props => props.theme.page.textColor};

    font-family: 'Nunito', sans-serif;
  }
`
