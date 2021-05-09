const Storage = class {
  set(key, value) {
    return window.localStorage.setItem(key, JSON.stringify(value));
  }
  get() {
    if (typeof localStorage === 'undefined') return [];
    return JSON.parse(window.localStorage.getItem('links'));
  }
}

export default Storage;
