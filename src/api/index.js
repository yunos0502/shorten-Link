const baseUrl = 'https://api-ssl.bitly.com/v4';

const Method = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
};

const Headers = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  'Content-Type': 'application/json',
};

const URI = {
  shorten: '/shorten',
  bitlinks: '/bitlinks',
};

const dataString = (linkItem) => {
  const { link, tags = [], title = '' } = linkItem;

  return {
    long_url: link,
    domain: 'bit.ly',
    group_guid: 'Bl517zIzujW',
    title,
    tags,
    deeplinks: [],
  };
};

const option = (method, linkItem) => {
  return {
    method,
    headers: Headers,
    body: JSON.stringify(dataString(linkItem)),
  };
};

const fetchAPI = (path, options) => {
  return fetch(baseUrl + path, options)
    .then((Response) => {
      if (!Response.ok) throw new Error(Response.status);
      return Response.json();
    })
    .catch((error) => { return console.error(error); });
};

const API = {
  getShorten: (linkItem) => { return fetchAPI(URI.bitlinks, option(Method.POST, linkItem)); },
};

export default API;
