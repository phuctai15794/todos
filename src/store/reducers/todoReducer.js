import actionTypes from '../actions/actionTypes';

const initState = {
    list: [],
    filters: {
        current: 'all',
        types: {
            all: (todo) => todo,
            active: (todo) => !todo.isCompleted,
            completed: (todo) => todo.isCompleted
        }
    }
};

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD: {
            const newTodos = [...state.list, action.payload];

            return {
                ...state,
                list: newTodos
            };
        }

        case actionTypes.UPDATE: {
            const newTodos = [...state.list].map((todo) => {
                return (todo.id === action.payload.id && action.payload) || todo;
            });

            return {
                ...state,
                list: newTodos
            };
        }

        case actionTypes.TOGGLE_COMPLETE_ALL: {
            const newTodos = [...state.list].map((todo) => {
                todo.isCompleted = action.payload;
                return todo;
            });

            return {
                ...state,
                list: newTodos
            };
        }

        case actionTypes.TOGGLE_COMPLETE: {
            const newTodos = [...state.list].map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.isCompleted = !todo.isCompleted;
                }

                return todo;
            });

            return {
                ...state,
                list: newTodos
            };
        }

        case actionTypes.FILTER: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    current: action.payload
                }
            };
        }

        case actionTypes.CLEAR_COMPLETED: {
            const newTodos = [...state.list].filter(state.filters.types.active);

            return {
                ...state,
                list: newTodos
            };
        }

        case actionTypes.DELETE: {
            const newTodos = [...state.list].filter((todo) => {
                return todo.id !== action.payload.id && todo;
            });

            return {
                ...state,
                list: newTodos
            };
        }

        default:
            return state;
    }
};

export default todoReducer;
