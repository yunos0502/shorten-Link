export const setStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = () => {
  if (typeof localStorage === 'undefined') return [];
  return JSON.parse(window.localStorage.getItem('links'));
};
