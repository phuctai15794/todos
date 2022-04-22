import actionTypes from './actionTypes';

export const userLogin = (userInfo) => ({
	type: actionTypes.USER.USER_LOGIN,
	userInfo
});
