import { GET_POST_SUCCESS, GET_POST_FAILED, GET_POST_BY_ID } from '../actionType/posts';

const initState = {
  posts: [],
  selectedPost: null,
};

const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POST_SUCCESS:
      return { state, posts: action.posts };
    case GET_POST_FAILED:
      return initState;
    case GET_POST_BY_ID:
      return { state, selectedPost: action.post };
    default:
      return state;
  }
};

export default postsReducer;
