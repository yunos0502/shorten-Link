import React from 'react';
import styled from 'styled-components';

const Head = styled.header`
  width: 80vw;
  max-width: 300px;
  height: 40px;
  position: relative;
  background: #20b9f1;
  padding: 0 25px;
  margin: 40px auto;
  text-align: center;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 50%);

  &:after {
    content: '';
    position: absolute;
    left: -3px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid #f0f2f5;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  &:before {
    content: '';
    position: absolute;
    right: -3px;
    bottom: 0;
    width: 0;
    height: 0;
    border-right: 20px solid #f0f2f5;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  h1 {
    color: #f0f2f5;
    font-size: 1.5rem;
  }
`;

const Header = () => {
  return (
    <Head>
      <h1>Shorten Links</h1>
    </Head>
  );
};

export default Header;
