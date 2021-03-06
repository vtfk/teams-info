import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/Content'
import VideoList from '../components/VideoList'
import InformationText from '../components/InformationText'

const Home = () => (
  <>
    <Head>
      <title>Teams-informasjon og veiledning</title>
      <meta name='description' content='Informasjon og veiledninger for deg som bruker Teams!' />
    </Head>

    <Header />

    <Content>
      <InformationText />
      <VideoList />
    </Content>

    <Footer />
  </>
)

export default Home
