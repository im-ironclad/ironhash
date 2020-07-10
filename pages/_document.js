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

          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-57087510-12"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-57087510-12');
              `
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument