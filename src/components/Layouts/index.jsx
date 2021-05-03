import React, { memo } from 'react';
import ProtoTypes from 'prop-types';

const AppLayout = memo(({ children }) => {
  return (
    <>
      <header />
      {children}
      <footer />
    </>
  );
});

AppLayout.propTypes = {
  children: ProtoTypes.array.isRequired,
};

export default AppLayout;
