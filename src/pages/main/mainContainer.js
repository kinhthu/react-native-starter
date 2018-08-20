import { connect } from 'react-redux';

import MainComponent from './mainComponent';
import { getPosts } from '../../redux/actions';

const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
});

const mapDispatchToProps = dispatch => ({
  onGetPosts: () => dispatch(getPosts()),
});

// async componentWillMount() {
//   await Expo.Font.loadAsync({
//     'Roboto': require('native-base/Fonts/Roboto.ttf'),
//     'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
//   });
// }

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
export default MainContainer;
