import React from 'react';
import Document, { Html, Main, Head, NextScript } from 'next/document';

export default class MyDocument extends Document {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
          />
        </Head>
        <NextScript />
        <body>
          <Main />
        </body>
      </Html>
    );
  }
}
