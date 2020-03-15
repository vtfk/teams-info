import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='no'>
        <Head>
          <link href='images/favicon.ico' rel='icon' type='image/x-icon' />
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />

          <link href='https://fonts.googleapis.com/css?family=Nunito|Nunito+Sans&display=swap' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
