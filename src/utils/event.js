import API from '../api';

// eslint-disable-next-line consistent-return
export async function fetchAPI(setTransformLink, linkItem) {
  try {
    const fetchItem = await API.getShorten(linkItem);
    setTransformLink(fetchItem);
  } catch (error) {
    console.error(error);
  }
}
