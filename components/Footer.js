import React from 'react'
import styled from 'styled-components'

export default () => (
  <ThemedFooter>
    Vestfold og Telemark fylkeskommune &copy; 2020
  </ThemedFooter>
)

const ThemedFooter = styled.footer`
  width: 100%;
  padding: 30px 0px;
  margin-top: 50px;

  background-color: ${props => props.theme.footer.background};
  
  color: ${props => props.theme.footer.textColor};
  text-align: center;
`
