import React, { useCallback, useEffect, useRef, useState } from 'react';
import AppLayout from '../components/Layouts';
import LinkInput from '../components/LinkInput';
import LinkList from '../components/LinkList';
import Modal from '../components/Modal';
import { fetchAPI, Messages } from '../utils/event';
import Storage from '../utils/storage';

const Home = () => {
  const storage = new Storage();
  const [fetchLinks, setFetchLinks] = useState(storage.get() || []);
  const [transformLink, setTransformLink] = useState();
  const [state, setState] = useState(false);
  const [message, setMessage] = useState('');
  const inputRef = useRef();
  let stateTimeout;

  const onTransformLink = useCallback((title, link) => {
    const linkItem = {
      link,
      tags: [],
      title
    }
    fetchAPI(setTransformLink, linkItem);
    
    
    inputRef.current.value = '';
  }, []);

  const onDeleteLink = useCallback((e) => {
    const { _id } = e.target.closest('li').dataset;
    const filterLinks = fetchLinks.filter(link => {return link.id !== _id});

    setFetchLinks(filterLinks);
    setMessage(Messages.deletedSuccess);
    setState(true);
  }, [fetchLinks]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  useEffect(() => {
    if (!transformLink) return;

    const findUrl = fetchLinks.find(item => {return item.long_url === transformLink.long_url});
    setState(true);
    if (findUrl) {
      setMessage(Messages.overlapFailed);
      return;
    } else {
      setMessage(Messages.success);
      setFetchLinks([...fetchLinks, transformLink]);
    }
  }, [transformLink]);

  useEffect(() => {
    storage.set('links', fetchLinks);
  }, [fetchLinks]);

  useEffect(() => {
    stateTimeout = setTimeout(() => setState(false), 1500);
  }, [message, state]);

  useEffect(() => {
    clearTimeout(stateTimeout);
  }, [stateTimeout]);
  
  return (
    <AppLayout>
      <LinkInput 
        onTransformLink={onTransformLink}
        inputRef={inputRef}
        setState={setState}
        setMessage={setMessage}
      />
      <LinkList 
        links={fetchLinks}
        onDeleteLink={onDeleteLink}
        setState={setState}
        setMessage={setMessage}
      />
      {state && <Modal message={message} />}
    </AppLayout>
  );
};

export default Home;
