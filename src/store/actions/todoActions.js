import actionTypes from './actionTypes';

export const ADD = (todo) => ({
    type: actionTypes.ADD,
    payload: todo
});

export const UPDATE = (todo) => ({
    type: actionTypes.UPDATE,
    payload: todo
});

export const TOGGLE_COMPLETE_ALL = (isCompletedAll) => ({
    type: actionTypes.TOGGLE_COMPLETE_ALL,
    payload: isCompletedAll
});

export const TOGGLE_COMPLETE = (todo) => ({
    type: actionTypes.TOGGLE_COMPLETE,
    payload: todo
});

export const FILTER = (type) => ({
    type: actionTypes.FILTER,
    payload: type
});

export const CLEAR_COMPLETED = () => ({
    type: actionTypes.CLEAR_COMPLETED
});

export const DELETE = (todo) => ({
    type: actionTypes.DELETE,
    payload: todo
});
