import { connect } from 'react-redux';

import PostsComponent from '../components/postsComponent';
import { getPosts } from '../redux/actions';

const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
});

const mapDispatchToProps = dispatch => ({
  onGetPosts: () => dispatch(getPosts()),
});

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(PostsComponent);
export default PostsContainer;
