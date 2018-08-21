import { connect } from 'react-redux';

import MainComponent from './mainComponent';
// import { getPosts } from '../../redux/actions';

const mapStateToProps = state => ({
  isLoggedIn: state.authReducer.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  // onGetPosts: () => dispatch(getPosts()),
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
export default MainContainer;
