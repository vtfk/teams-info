import styled from 'styled-components'

export default styled.div.attrs(props => ({
  ...props
}))`
  width: 90%;
  max-width: 1000px;

  padding: 20px;
  padding-top: 5px;
  margin: 20px 10px;

  text-align: center;

  background-color: ${props => props.theme.card.background};
  color: ${props => props.theme.card.textColor};

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`
