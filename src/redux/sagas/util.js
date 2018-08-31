export const get = async (url = '') => {
  const response = await fetch(url);
  return response.status === 201 ? response.json() : null;
};

export const post = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.status === 201 ? response : null;
};

export const put = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.status === 201 ? response : null;
};
