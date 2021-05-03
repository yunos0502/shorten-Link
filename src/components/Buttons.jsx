import React from 'react';
import styled from 'styled-components';

export const DeleteLinkButton = styled.button`
  width: 20px;
  height: 20px;
  background: url('https://icongr.am/entypo/cross.svg?size=128&color=ff0040')
    no-repeat 50% / contain;
  display: inline-block;
  border: 0;
`;

export const CopyLinkButton = styled.button`
  width: 20px;
  height: 20px;
  background: url('https://icongr.am/feather/copy.svg?size=128&color=5c5c5c')
    no-repeat 50% / contain;
  display: inline-block;
  border: 0;
`;

const Buttons = () => {
  return <button aria-label="handler" type="button" />;
};

export default Buttons;
