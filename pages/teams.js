import React from 'react'
import Head from 'next/head'

import Content from '../components/Content'
import InformationText from '../components/InformationText'
import VideoList from '../components/VideoList'

const Teams = () => (
  <>
    <Head>
      <title>Teams-informasjon og veiledning</title>
      <meta name='description' content='Informasjon og veiledninger for deg som bruker Teams!' />
    </Head>

    <Content>
      <InformationText />
      <VideoList />
    </Content>

  </>
)

export default Teams
