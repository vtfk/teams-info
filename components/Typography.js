import styled from 'styled-components'

export const Title = styled.h1`
  font-family: 'Nunito', sans-serif;

  font-size: 26px;
  font-weight: 700;
`

export const Text = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 17px;
`

export const Link = styled.a.attrs((props) => ({
  target: props.target || '_blank'
}))`
  font-family: 'Nunito Sans', sans-serif;
  color: ${props => props.theme.page.linkColor};
  border-bottom: 1px solid ${props => props.theme.page.linkColor};

  &, &:hover {
    text-decoration: none;
  }

  &:hover {
    border-bottom: none;
  }

  &:active {
    font-weight: bold;
  }
`
