import { connect } from 'react-redux';

import LoginComponent from './loginComponent';
import { startLogin } from '../../redux/actions/auth';

const mapStateToProps = state => ({
  // posts: state.postsReducer.posts,
});

const mapDispatchToProps = dispatch => ({
  onLogin: () => dispatch(startLogin()),
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
export default LoginContainer;
