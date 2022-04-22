import actionTypes from '../actions/actionTypes';

const initState = {
	language: 'vi',
};

const appReducer = (state = initState, action) => {
	switch (action.type) {
		case actionTypes.APP_CHANGE_LANGUAGE: {
			return {
				...state,
				language: action.payload,
			};
		}

		default:
			return state;
	}
};

export default appReducer;
