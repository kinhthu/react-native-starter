/* eslint no-underscore-dangle: 0 */
const getPostsUrl = 'https://jsonplaceholder.typicode.com/posts';

function* getPostsFromApi() {
  const response = yield fetch(getPostsUrl);
  const posts = yield response.status === 200 ? response.json() : [];

  return posts;
}

const Api = {
  getPostsFromApi,
};

export default Api;
