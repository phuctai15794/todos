import actionTypes from './actionTypes';

export const ADD = (todo) => ({
	type: actionTypes.TODOS_ADD,
	payload: todo,
});

export const UPDATE = (todo) => ({
	type: actionTypes.TODOS_UPDATE,
	payload: todo,
});

export const TOGGLE_COMPLETE_ALL = (isCompletedAll) => ({
	type: actionTypes.TODOS_TOGGLE_COMPLETE_ALL,
	payload: isCompletedAll,
});

export const TOGGLE_COMPLETE = (todo) => ({
	type: actionTypes.TODOS_TOGGLE_COMPLETE,
	payload: todo,
});

export const FILTER = (type) => ({
	type: actionTypes.TODOS_FILTER,
	payload: type,
});

export const CLEAR_COMPLETED = () => ({
	type: actionTypes.TODOS_CLEAR_COMPLETED,
});

export const DELETE = (todo) => ({
	type: actionTypes.TODOS_DELETE,
	payload: todo,
});
