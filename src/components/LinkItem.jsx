import React from 'react';
import ProtoTypes from 'prop-types';
import { CopyLinkButton, DeleteLinkButton } from './Buttons';

const LinkItem = ({ link, onUrlCopyHandler, onDeleteLink }) => {
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
  onUrlCopyHandler: ProtoTypes.func.isRequired,
  onDeleteLink: ProtoTypes.func.isRequired,
};

export default LinkItem;
