import React, { memo } from 'react';
import ProtoTypes from 'prop-types';
import Header from './Header';

const AppLayout = memo(({ children }) => {
  return (
    <>
      <Header />
      {children}
      <footer />
    </>
  );
});

AppLayout.propTypes = {
  children: ProtoTypes.array.isRequired,
};

export default AppLayout;
