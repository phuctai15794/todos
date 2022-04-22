import actionTypes from '../actions/actionTypes';

const initState = {
	userInfo: null,
	isLoggedIn: false,
};

const userReducer = (state = initState, action) => {
	switch (action.type) {
		case actionTypes.USER_LOGIN:
			return {
				...state,
				userInfo: action.userInfo,
				isLoggedIn: true,
			};

		case actionTypes.USER_LOGOUT:
			return {
				...state,
				userInfo: null,
				isLoggedIn: false,
			};

		default:
			return state;
	}
};

export default userReducer;
