import actionTypes from './actionTypes';

export const CHANGE_LANGUAGE = (language) => ({
	type: actionTypes.APP_CHANGE_LANGUAGE,
	payload: language,
});
