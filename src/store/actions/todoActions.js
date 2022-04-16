import actionTypes from './actionTypes';

export const ADD = (todo) => ({
    type: actionTypes.TODOS.ADD,
    payload: todo,
});

export const UPDATE = (todo) => ({
    type: actionTypes.TODOS.UPDATE,
    payload: todo,
});

export const TOGGLE_COMPLETE_ALL = (isCompletedAll) => ({
    type: actionTypes.TODOS.TOGGLE_COMPLETE_ALL,
    payload: isCompletedAll,
});

export const TOGGLE_COMPLETE = (todo) => ({
    type: actionTypes.TODOS.TOGGLE_COMPLETE,
    payload: todo,
});

export const FILTER = (type) => ({
    type: actionTypes.TODOS.FILTER,
    payload: type,
});

export const CLEAR_COMPLETED = () => ({
    type: actionTypes.TODOS.CLEAR_COMPLETED,
});

export const DELETE = (todo) => ({
    type: actionTypes.DELETE,
    payload: todo,
});
