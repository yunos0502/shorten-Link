import React, { memo, useCallback } from 'react';
import ProtoTypes from 'prop-types';
import styled from 'styled-components';
import { $ } from '../utils/common';

const InputBox = styled.div`
  max-width: 600px;
  width: 95vw;
  margin: 20px auto;
  display: flex;
  align-items: stretch;
  justify-content: center;

  input {
    text-align: center;
    outline: 0;
    border: 5px solid #f7f7f7;
    position: relative;
    z-index: 2;
    border-radius: 5px;
    font-size: 1em;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
    width: 60%;
    padding: 0.3rem;

    &#title {
      width: 30%;
    }
  }
  button {
    width: 10%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
    background-color: #21b9f1;
    color: #f7f7f7;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 5px;
    margin-left: 0.2rem;
  }
`;

const LinkInput = memo(
  ({ onTransformLink, inputRef, setState, setMessage }) => {
    const InputAlert = useCallback((url) => {
      const title = $('#title');
      const urlRegex = new RegExp(
        '(http|https|ftp|telnet|news|irc)://([-/.a-zA-Z0-9_~#%$?&=:200-377()]+)',
        'gi',
      );

      if (!url || !urlRegex.test(url)) {
        setState(true);
        setMessage('변경할 url을 입력해주세요 🤔');
        return;
      }

      onTransformLink(title.value, url);
      title.value = '';
    }, []);

    const onClickButton = useCallback((e) => {
      InputAlert(e.target.previousSibling.value);
    }, []);

    const onPressInput = useCallback((e) => {
      if (e.code !== 'Enter') return;
      InputAlert(e.currentTarget.value);
    }, []);

    return (
      <InputBox>
        <input type="text" id="title" placeholder="TITLE" />
        <input
          type="text"
          onKeyPress={onPressInput}
          ref={inputRef}
          placeholder="URL"
        />
        <button type="button" onClick={onClickButton}>
          OK
        </button>
      </InputBox>
    );
  },
);

LinkInput.propTypes = {
  onTransformLink: ProtoTypes.func.isRequired,
  inputRef: ProtoTypes.object.isRequired,
};

export default LinkInput;
