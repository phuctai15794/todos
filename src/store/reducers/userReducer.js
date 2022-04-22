import actionTypes from '../actions/actionTypes';

const initUser = {
    username: 'admin',
    password: 'admin123'
}

const initState = {
	userInfo: null,
	isLoggedIn: false
};

const userReducer = (state = initState, action) => {
	switch (action.type) {
		case actionTypes.USER_LOGIN:
			return { userInfo: action.userInfo, isLoggedIn: false };

		case actionTypes.USER_LOGOUT:
			return { userInfo: null, isLoggedIn: false };

		default:
			return state;
	}
};

export default userReducer;
