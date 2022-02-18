const safe_set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const safe_get = (key) => {
  if (localStorage.hasOwnProperty(key)) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return null;
  }
};

const safe_has = (key) => {
  return localStorage.hasOwnProperty(key);
};

const safe_remove = (key) => {
  return localStorage.removeItem(key);
};

export { safe_get, safe_set, safe_has, safe_remove };
