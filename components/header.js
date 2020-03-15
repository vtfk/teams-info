import React from 'react'
import styled from 'styled-components'

import Container from './Container'

export default () => (
  <ThemedHeader>
    <Container>
      <ThemedLogoDiv>
        <a href='https://vtfk.no' alt='Vestfold og Telemark fylkeskommune'>
          <ThemedLogo />
        </a>
      </ThemedLogoDiv>
    </Container>
  </ThemedHeader>
)

const ThemedHeader = styled.header`
  padding: 35px 0 30px 0;
  margin-bottom: 30px;

  background-color: ${props => props.theme.header.background};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
`

const ThemedLogoDiv = styled.div`
  width: 100%;
  max-width: 290px;

  display: block;
`

const ThemedLogo = styled.img.attrs(props => ({
  src: props.theme.header.logoSrc
}))`
  padding-left: 15px;
`
