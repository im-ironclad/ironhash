import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // No need for initialProps
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            key="description"
            content="Quickly and easily research related Instagram hashtags for your Instagram influencing."
          />

          <script
            async
            defer
            data-domain="ironhash.com"
            src="https://plausible.io/js/plausible.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument