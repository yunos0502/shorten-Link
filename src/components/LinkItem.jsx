import React from 'react';
import ProtoTypes from 'prop-types';
import { CopyLinkButton, DeleteLinkButton } from './Buttons';

const LinkItem = ({ link, copyLinkHandler, onDeleteLink }) => {
  const onUrlCopyHandler = (e) => {
    e.preventDefault();
    copyLinkHandler(e.target.previousSibling.innerText);
  };

  return (
    <li key={link.id} data-_id={link.id}>
      <span>{link.title}</span>
      <span>{link.link}</span>
      <CopyLinkButton onClick={onUrlCopyHandler} />
      <DeleteLinkButton onClick={onDeleteLink} />
    </li>
  );
};

LinkItem.propTypes = {
  link: ProtoTypes.object.isRequired,
  copyLinkHandler: ProtoTypes.func.isRequired,
  onDeleteLink: ProtoTypes.func.isRequired,
};

export default LinkItem;
