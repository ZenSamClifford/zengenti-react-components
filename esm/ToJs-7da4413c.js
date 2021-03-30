import React from 'react';
import { Map, Iterable } from 'immutable';

const selectUserIsLoading = state => {
  return state.getIn(['user', 'authenticationState', 'loading']);
};
const selectUserIsAuthenticated = state => {
  return state.getIn(['user', 'authenticationState', 'authenticated']) && state.getIn(['user']) != null;
};
const selectUserAuthenticationError = state => {
  return state.getIn(['user', 'authenticationState', 'authenticationError']);
};
const selectUserError = state => {
  return state.getIn(['user', 'authenticationState', 'error']);
};
const selectClientCredentials = state => {
  return state.getIn(['user', 'authenticationState', 'clientCredentials']);
};
const selectUser = state => {
  return state.getIn(['user']);
};
const selectUserIsZengentiStaff = state => {
  return state.getIn(['user', 'isZengentiStaff']);
};
const selectUserGuid = state => {
  return state.getIn(['user', 'id']);
};
const selectUsername = state => {
  return state.getIn(['user', 'username']);
};
const selectUserEmail = state => {
  return state.getIn(['user', 'email']);
};
const selectUserGroups = state => {
  return state.getIn(['user', 'groups']);
};
const selectUserSecurityToken = state => {
  return state.getIn(['user', 'authenticationState', 'clientCredentials', 'contensisClassicToken']);
};
const selectUserRegistration = state => state.getIn(['user', 'registration'], Map());
const selectUserRegistrationError = state => state.getIn(['user', 'registration', 'error'], false);
const selectUserRegistrationIsLoading = state => state.getIn(['user', 'registration', 'loading'], false);
const selectUserRegistrationIsSuccess = state => state.getIn(['user', 'registration', 'success'], false);
const selectPasswordResetRequestSending = state => {
  return state.getIn(['user', 'passwordResetRequest', 'isSending']);
};
const selectPasswordResetRequestSent = state => {
  return state.getIn(['user', 'passwordResetRequest', 'sent']);
};
const selectPasswordResetRequestError = state => {
  return state.getIn(['user', 'passwordResetRequest', 'error']);
};
const selectResetPasswordSending = state => {
  return state.getIn(['user', 'resetPassword', 'isSending']);
};
const selectResetPasswordSent = state => {
  return state.getIn(['user', 'resetPassword', 'sent']);
};
const selectResetPasswordError = state => {
  return state.getIn(['user', 'resetPassword', 'error']);
};

var selectors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  selectUserIsLoading: selectUserIsLoading,
  selectUserIsAuthenticated: selectUserIsAuthenticated,
  selectUserAuthenticationError: selectUserAuthenticationError,
  selectUserError: selectUserError,
  selectClientCredentials: selectClientCredentials,
  selectUser: selectUser,
  selectUserIsZengentiStaff: selectUserIsZengentiStaff,
  selectUserGuid: selectUserGuid,
  selectUsername: selectUsername,
  selectUserEmail: selectUserEmail,
  selectUserGroups: selectUserGroups,
  selectUserSecurityToken: selectUserSecurityToken,
  selectUserRegistration: selectUserRegistration,
  selectUserRegistrationError: selectUserRegistrationError,
  selectUserRegistrationIsLoading: selectUserRegistrationIsLoading,
  selectUserRegistrationIsSuccess: selectUserRegistrationIsSuccess,
  selectPasswordResetRequestSending: selectPasswordResetRequestSending,
  selectPasswordResetRequestSent: selectPasswordResetRequestSent,
  selectPasswordResetRequestError: selectPasswordResetRequestError,
  selectResetPasswordSending: selectResetPasswordSending,
  selectResetPasswordSent: selectResetPasswordSent,
  selectResetPasswordError: selectResetPasswordError
});

const matchUserGroup = (userGroups = [], requiredGroups = []) => {
  if (!Array.isArray(requiredGroups) || Array.isArray(requiredGroups) && requiredGroups.length === 0) return true;
  const groupMatch = requiredGroups.some(requiredGroup => {
    return userGroups.some(userGroup => {
      if (requiredGroup.id === userGroup.id) {
        return true;
      }

      if (requiredGroup.name === userGroup.name) {
        return true;
      }
    });
  });
  return groupMatch;
};

const toJS = WrappedComponent => wrappedComponentProps => {
  const KEY = 0;
  const VALUE = 1;
  const propsJS = Object.entries(wrappedComponentProps).reduce((newProps, wrappedComponentProp) => {
    newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(wrappedComponentProp[VALUE]) ? wrappedComponentProp[VALUE].toJS() : wrappedComponentProp[VALUE];
    return newProps;
  }, {});
  return React.createElement(WrappedComponent, propsJS);
};

<<<<<<< HEAD:esm/ToJs-020d9abb.js
export { selectUserGroups as a, selectClientCredentials as b, selectUserAuthenticationError as c, selectUserError as d, selectUserIsLoading as e, selectUser as f, selectUserRegistrationError as g, selectUserRegistrationIsLoading as h, selectUserRegistrationIsSuccess as i, selectUserRegistration as j, selectors as k, matchUserGroup as m, selectUserIsAuthenticated as s, toJS as t };
//# sourceMappingURL=ToJs-020d9abb.js.map
=======
export { selectUserGroups as a, selectClientCredentials as b, selectUserAuthenticationError as c, selectUserError as d, selectUserIsLoading as e, selectUser as f, selectUserRegistrationError as g, selectUserRegistrationIsLoading as h, selectUserRegistrationIsSuccess as i, selectUserRegistration as j, selectPasswordResetRequestSending as k, selectPasswordResetRequestSent as l, matchUserGroup as m, selectPasswordResetRequestError as n, selectResetPasswordSending as o, selectResetPasswordSent as p, selectResetPasswordError as q, selectors as r, selectUserIsAuthenticated as s, toJS as t };
//# sourceMappingURL=ToJs-7da4413c.js.map
>>>>>>> 10419d5... commit bundles:esm/ToJs-7da4413c.js
