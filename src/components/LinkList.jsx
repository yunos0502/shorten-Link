import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import ProtoTypes from 'prop-types';
import LinkItem from './LinkItem';

const AlertModal = styled.div`
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
      1rem 50% / 2rem;
    padding: 0.5rem 1rem 0.5rem 3rem;
    border-radius: 5px;
    color: #20c4d1;
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Lists = styled.ul`
  max-width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  li {
    display: flex;
    align-items: center;
    line-height: 2rem;
    font-size: 1.5rem;

    span {
      padding: 0.5rem;
      flex: 1;

      &:first-of-type {
        width: 30%;
        flex: unset;
      }
    }
  }
`;

const LinkList = memo(({ links, onDeleteLink }) => {
  const [copyState, setCopyState] = useState(false);
  const [loading, setLoading] = useState(false);
  let copyTimeout;

  const copyLinkHandler = (link) => {
    if (link && document.hasFocus()) {
      navigator.clipboard
        .writeText(link)
        .then(() => {
          setCopyState(true);
          copyTimeout = setTimeout(() => {
            return setCopyState(false);
          }, 1500);
        })
        .catch((err) => {
          console.error('클립보드에 복사 실패', err);
        });
    }
  };

  const onUrlCopyHandler = (e) => {
    e.preventDefault();
    copyLinkHandler(e.target.previousSibling.innerText);
  };

  useEffect(() => {
    clearTimeout(copyTimeout);
  }, [copyTimeout]);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      return setLoading(true);
    }, 1000);
    return () => {
      return clearTimeout(loadingTimeout);
    };
  }, [setLoading]);

  return (
    <>
      <Lists>
        {loading &&
          links &&
          links.map((link) => {
            return (
              <LinkItem
                key={link.id}
                link={link}
                onUrlCopyHandler={onUrlCopyHandler}
                onDeleteLink={onDeleteLink}
              />
            );
          })}
      </Lists>
      {copyState && (
        <AlertModal>
          <p>success</p>
        </AlertModal>
      )}
    </>
  );
});

LinkList.propTypes = {
  links: ProtoTypes.array.isRequired,
  onDeleteLink: ProtoTypes.func.isRequired,
};

export default LinkList;
