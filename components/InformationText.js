import styled from 'styled-components'

import { Title, Text, Link } from './Typography'
import Container from './Container'

const InformationText = () => (
  <>
    <TextContainer>
      <Title>Bruk av Teams i undervisning og som møteplattform</Title>
      <Text>
      Her har vi samlet noen veiledninger som skal gjøre det enklere for deg å komme i gang med Teams.
      </Text>
      <Text>
      Elever kan lese mer her: <Link href='https://www.vtfk.no/aktuelt/kom-i-gang-med-digital-undervisning/'>Digital undervisning (vtfk.no)</Link><br />
      Lærere kan lese mer her: <Link href='https://portalen.vfk.no/sites/nyttfylke/LMSTeamsEdu/Sider/default.aspx'>Digital undervisning (portalen)</Link><br />
      Øvrige ansatte kan lese mer her: <Link href='https://portalen.vfk.no/sites/nyttfylke/Sider/DigitaleM%C3%B8ter.aspx'>Kom i gang med digitale møter (portalen)</Link>
      </Text>
    </TextContainer>
  </>
)

const TextContainer = styled(Container)`
  padding: 15px;
  padding-top: 5px;
  max-width: 1000px;
  font-size: 1.5em;
  line-height: 1.48;
`

export default InformationText
