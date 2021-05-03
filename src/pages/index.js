import React, { useCallback, useEffect, useRef, useState } from 'react';
import AppLayout from '../components/Layouts';
import LinkInput from '../components/LinkInput';
import LinkList from '../components/LinkList';
import { fetchAPI } from '../utils/event';
import { getStorage, setStorage } from '../utils/storage';

const Home = () => {
  const [fetchLinks, setFetchLinks] = useState(getStorage() || []);
  const [transformLink, setTransformLink] = useState();
  const inputRef = useRef();

  const onTransformLink = useCallback((title, link) => {
    const linkItem = {
      link,
      tags: [],
      title
    }
    fetchAPI(setTransformLink, linkItem);
    inputRef.current.value = '';
  }, [])

  const onDeleteLink = useCallback((e) => {
    const { _id } = e.target.closest('li').dataset;
    const filterLinks = fetchLinks.filter(link => {return link.id !== _id});

    setFetchLinks(filterLinks);
  }, [fetchLinks])

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  useEffect(() => {
    if (!transformLink) return;

    const findUrl = fetchLinks.find(item => {return item.long_url === transformLink.long_url});
    if (findUrl) {
      // eslint-disable-next-line no-alert
      alert('이미 등록된 URL입니다 😫');
    } else {
      setFetchLinks([...fetchLinks, transformLink]);
    }
  }, [transformLink]);

  useEffect(() => {
    setStorage('links', fetchLinks);
  }, [fetchLinks])
  
  return (
    <AppLayout>
      <LinkInput 
        onTransformLink={onTransformLink} 
        inputRef={inputRef} 
      />
      <LinkList links={fetchLinks} onDeleteLink={onDeleteLink} />
    </AppLayout>
  );
};

export default Home;
