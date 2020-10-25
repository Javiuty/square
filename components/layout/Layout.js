import React from "react";
import { Global, css } from "@emotion/core";
import Head from "next/head";

const Layout = (props) => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --color-primary: #0d2026;
            --color-secondary: #034a5e;
            --color-tertiary: #0fbdf2;
          }

          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }

          *,
          *:after,
          *:before {
            box-sizing: inherit;
          }

          body {
            font-size: 1.6rem;
            line-height: 1.5;
            color: #fff;
          }
        `}
      />
      <Head>
        <title>Square | Peliculas y Series</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/public/favicon.ico"
        ></link>
      </Head>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
