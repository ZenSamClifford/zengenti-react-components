'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react');
var reactRedux = require('react-redux');
require('immutable');
<<<<<<< HEAD
var routing = require('./routing-a4d7b382.js');
var reducers = require('./reducers-a05c32a6.js');
=======
var routing = require('./routing-6197a03e.js');
<<<<<<< HEAD
var reducers = require('./reducers-af3157ec.js');
>>>>>>> 10419d5... commit bundles
=======
var reducers = require('./reducers-7c73e91a.js');
>>>>>>> bf47c62... chore: Commit bundles
require('query-string');
require('./routing-5db2c867.js');
require('@redux-saga/core/effects');
<<<<<<< HEAD
<<<<<<< HEAD
var ToJs = require('./ToJs-128064bc.js');
var login = require('./login-0ce07250.js');
=======
var ToJs = require('./ToJs-6487bd5c.js');
var login = require('./login-34553267.js');
>>>>>>> 10419d5... commit bundles
=======
var ToJs = require('./ToJs-7dbcf7a7.js');
var login = require('./login-0c0c56cb.js');
>>>>>>> bf47c62... chore: Commit bundles
require('jsonpath-mapper');
require('await-to-js');
require('js-cookie');

const loginUser = (username, password) => routing.action(reducers.LOGIN_USER, {
  username,
  password
});
const logoutUser = redirectPath => routing.action(reducers.LOGOUT_USER, {
  redirectPath
});
const registerUser = (user, mappers) => routing.action(reducers.REGISTER_USER, {
  user,
  mappers
});
const requestPasswordReset = userEmailObject => routing.action(reducers.REQUEST_USER_PASSWORD_RESET, {
  userEmailObject
});
const resetPassword = resetPasswordObject => routing.action(reducers.RESET_USER_PASSWORD, {
  resetPasswordObject
});

var actions = /*#__PURE__*/Object.freeze({
  __proto__: null,
  loginUser: loginUser,
  logoutUser: logoutUser,
  registerUser: registerUser,
  requestPasswordReset: requestPasswordReset,
  resetPassword: resetPassword
});

const useLogin = () => {
  const dispatch = reactRedux.useDispatch();
  const select = reactRedux.useSelector;
  return {
    loginUser: (username, password) => dispatch(loginUser(username, password)),
    logoutUser: redirectPath => dispatch(logoutUser(redirectPath)),
    authenticationError: select(ToJs.selectUserAuthenticationError),
    authenticationErrorMessage: select(ToJs.selectUserAuthenticationErrorMessage),
    error: select(ToJs.selectUserError),
    errorMessage: select(ToJs.selectUserErrorMessage),
    isAuthenticated: select(ToJs.selectUserIsAuthenticated),
    isLoading: select(ToJs.selectUserIsLoading),
    user: select(ToJs.selectUser).toJS()
  };
};

const LoginContainer = ({
  children,
  ...props
}) => {
  const userProps = useLogin();
  return children(userProps);
};

LoginContainer.propTypes = {};
var Login_container = ToJs.toJS(LoginContainer);

const useRegistration = () => {
  const dispatch = reactRedux.useDispatch();
  const select = reactRedux.useSelector;
  return {
    registerUser: (user, mappers) => dispatch(registerUser(user, mappers)),
    error: select(ToJs.selectUserRegistrationError),
    isLoading: select(ToJs.selectUserRegistrationIsLoading),
    isSuccess: select(ToJs.selectUserRegistrationIsSuccess),
    user: select(ToJs.selectUserRegistration).toJS()
  };
};

const RegistrationContainer = ({
  children,
  ...props
}) => {
  const userProps = useRegistration();
  return children(userProps);
};

RegistrationContainer.propTypes = {};
var Registration_container = ToJs.toJS(RegistrationContainer);

const useForgotPassword = () => {
  const dispatch = reactRedux.useDispatch();
  const select = reactRedux.useSelector;
  return {
    isLoading: select(ToJs.selectPasswordResetRequestSending),
    isSuccess: select(ToJs.selectPasswordResetRequestSent),
    error: select(ToJs.selectPasswordResetRequestError),
    requestPasswordReset: userEmailObject => dispatch(requestPasswordReset(userEmailObject))
  };
};

const ForgotPasswordContainer = ({
  children,
  ...props
}) => {
  const userProps = useForgotPassword();
  return children(userProps);
};

ForgotPasswordContainer.propTypes = {};
var ForgotPassword_container = ToJs.toJS(ForgotPasswordContainer);

const useResetPassword = () => {
  const dispatch = reactRedux.useDispatch();
  const select = reactRedux.useSelector;
  return {
    queryString: select(routing.selectCurrentSearch),
    isLoading: select(ToJs.selectResetPasswordSending),
    isSuccess: select(ToJs.selectResetPasswordSent),
    error: select(ToJs.selectResetPasswordError),
    resetPassword: resetPasswordObject => dispatch(resetPassword(resetPasswordObject))
  };
};

const ResetPasswordContainer = ({
  children,
  ...props
}) => {
  const userProps = useResetPassword();
  return children(userProps);
};

ResetPasswordContainer.propTypes = {};
var ResetPassword_container = ToJs.toJS(ResetPasswordContainer);

const useUser = () => {
  return { ...useLogin(),
    ...useRegistration(),
    ...useForgotPassword(),
    ...useResetPassword()
  };
};

const UserContainer = ({
  children,
  ...props
}) => {
  const userProps = useUser();
  return children(userProps);
};

UserContainer.propTypes = {};
var User_container = ToJs.toJS(UserContainer);

const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

const withLogin = WrappedComponent => {
  // Returns a redux-connected component with the following props:
  // this.propTypes = {
  //   loading: PropTypes.bool,
  //   authenticated: PropTypes.bool,
  //   authenticationError: PropTypes.bool,
  //   error: PropTypes.bool,
  //   user: PropTypes.object,
  //   logoutUser: PropTypes.func,
  //   isHeaderLogin: PropTypes.bool,
  // };
  const mapStateToProps = state => {
    return {
      authenticationError: ToJs.selectUserAuthenticationError(state),
      error: ToJs.selectUserError(state),
      isAuthenticated: ToJs.selectUserIsAuthenticated(state),
      isLoading: ToJs.selectUserIsLoading(state),
      user: ToJs.selectUser(state)
    };
  };

  const mapDispatchToProps = {
    loginUser,
    logoutUser
  };
  const ConnectedComponent = reactRedux.connect(mapStateToProps, mapDispatchToProps)(ToJs.toJS(WrappedComponent));
  ConnectedComponent.displayName = `${getDisplayName(WrappedComponent)}`;
  return ConnectedComponent;
};

const getDisplayName$1 = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

const withRegistration = WrappedComponent => {
  // Returns a redux-connected component with the following props:
  // this.propTypes = {
  //   registerUser: PropTypes.func,
  //   isLoading: PropTypes.bool,
  //   isSuccess: PropTypes.bool,
  //   error: PropTypes.bool | PropTypes.object,
  //   user: PropTypes.object,
  // };
  const mapStateToProps = state => {
    return {
      error: ToJs.selectUserRegistrationError(state),
      isLoading: ToJs.selectUserRegistrationIsLoading(state),
      isSuccess: ToJs.selectUserRegistrationIsSuccess(state),
      user: ToJs.selectUserRegistration(state)
    };
  };

  const mapDispatchToProps = {
    registerUser
  };
  const ConnectedComponent = reactRedux.connect(mapStateToProps, mapDispatchToProps)(ToJs.toJS(WrappedComponent));
  ConnectedComponent.displayName = `${getDisplayName$1(WrappedComponent)}`;
  return ConnectedComponent;
};

exports.initialUserState = reducers.initialUserState;
exports.reducer = reducers.UserReducer;
exports.types = reducers.types;
exports.selectors = ToJs.selectors;
exports.LoginHelper = login.LoginHelper;
exports.handleRequiresLoginSaga = login.handleRequiresLoginSaga;
exports.refreshSecurityToken = login.refreshSecurityToken;
exports.ForgotPasswordContainer = ForgotPassword_container;
exports.LoginContainer = Login_container;
exports.RegistrationContainer = Registration_container;
exports.ResetPasswordContainer = ResetPassword_container;
exports.UserContainer = User_container;
exports.actions = actions;
exports.useForgotPassword = useForgotPassword;
exports.useLogin = useLogin;
exports.useRegistration = useRegistration;
exports.useResetPassword = useResetPassword;
exports.useUser = useUser;
exports.withLogin = withLogin;
exports.withRegistration = withRegistration;
//# sourceMappingURL=user.js.map
