import React, { memo } from 'react';
import Head from 'next/head';
import ProtoTypes from 'prop-types';
import '../../public/styles/global.css';

const ShortLinkApp = memo(({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>short-Link Bookmark</title>
      </Head>
      <Component />
    </>
  );
});

ShortLinkApp.propTypes = {
  Component: ProtoTypes.elementType.isRequired,
};

export default ShortLinkApp;
