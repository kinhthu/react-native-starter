import { connect } from 'react-redux';

import PostsComponent from './postsComponent';
import { getPosts } from '../../redux/actions/posts';

const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
});

const mapDispatchToProps = dispatch => ({
  onGetPosts: () => dispatch(getPosts()),
});

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(PostsComponent);
export default PostsContainer;
