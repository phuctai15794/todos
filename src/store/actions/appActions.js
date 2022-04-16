import actionTypes from './actionTypes';

export const CHANGE_LANGUAGE = (language) => ({
    type: actionTypes.APP.CHANGE_LANGUAGE,
    payload: language,
});
