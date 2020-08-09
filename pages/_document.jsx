/* eslint-disable react/no-unknown-property */
import { ServerStyleSheets } from '@material-ui/core/styles';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

import { favicons } from '../theme/favicons';
import { Fonts } from '../theme/Fonts';

export default class MyDocument extends Document {
  render() {
    const { language } = this.props;
    const fontPreloadUrls = [
      '/static/fonts/roboto/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
      '/static/fonts/roboto/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2',
    ];

    return (
      <Html lang={language}>
        <Head>
          {favicons.map(({ rel, size }) => (
            <link key={`${rel}${size}`} rel={rel} sizes={`${size}x${size}`} href={`/assets/images/fav-${size}px.png`} />
          ))}
          {fontPreloadUrls.map((url) => (
            <link key={url} rel="preload" href={url} as="font" type="font/woff2" crossOrigin />
          ))}
          <Fonts />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// // `getInitialProps` belongs to `_document` (instead of `_app`),
// // it's compatible with server-side generation (SSG).
// MyDocument.getInitialProps = async (ctx) => {
//   // Resolution order
//   //
//   // On the server:
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. document.getInitialProps
//   // 4. app.render
//   // 5. page.render
//   // 6. document.render
//   //
//   // On the server with error:
//   // 1. document.getInitialProps
//   // 2. app.render
//   // 3. page.render
//   // 4. document.render
//   //
//   // On the client
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. app.render
//   // 4. page.render

//   // Render app and page and get the context of the page with collected side effects.
//   const sheets = new ServerStyleSheets();
//   const originalRenderPage = ctx.renderPage;

//   ctx.renderPage = () =>
//     originalRenderPage({
//       enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
//     });

//   const initialProps = await Document.getInitialProps(ctx);

//   return {
//     ...initialProps,
//     language: 'en',
//     // Styles fragment is rendered after the app and page rendering finish.
//     styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
//   };
// };
