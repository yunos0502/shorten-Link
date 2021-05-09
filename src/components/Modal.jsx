import React from 'react';
import styled from 'styled-components';

const Alert = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  z-index: 10;

  p {
    background: #fff
      url('https://icongr.am/entypo/check.svg?size=128&color=20c4d1') no-repeat
      1rem 50% / 1.5rem;
    padding: 0.5rem 1rem 0.5rem 3rem;
    border-radius: 5px;
    color: #20c4d1;
    font-size: 1.2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 50vw;
    min-width: 280px;
  }
`;

const Modal = ({ message }) => (
  <Alert>
    <p>{message}</p>
  </Alert>
);

export default Modal;
