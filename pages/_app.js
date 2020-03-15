import App from 'next/app'
import Head from 'next/head'
import React from 'react'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../components/GlobalStyles'
import theme from '../config/appThemes'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
