// import * as storage from '../../utils/Storage';

const initState = {
    todos: {
        list: [],
        filters: {
            current: 'all',
            types: {
                all: (todo) => todo,
                active: (todo) => !todo.isCompleted,
                completed: (todo) => todo.isCompleted
            }
        }
    }
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD': {
            const newTodos = [...state.todos.list, action.payload];
            // storage.set('TODOS', newTodos);

            return {
                ...state,
                todos: {
                    ...state.todos,
                    list: newTodos
                }
            };
        }

        case 'UPDATE': {
            const newTodos = [...state.todos.list].map((todo) => {
                return (todo.id === action.payload.id && action.payload) || todo;
            });

            // storage.set('TODOS', newTodos);

            return {
                ...state,
                todos: {
                    ...state.todos,
                    list: newTodos
                }
            };
        }

        case 'TOGGLE-COMPLETE-ALL': {
            const newTodos = [...state.todos.list].map((todo) => {
                todo.isCompleted = action.payload;
                return todo;
            });

            // storage.set('TODOS', newTodos);

            return {
                ...state,
                todos: {
                    ...state.todos,
                    list: newTodos
                }
            };
        }

        case 'TOGGLE-COMPLETE': {
            const newTodos = [...state.todos.list].map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.isCompleted = !todo.isCompleted;
                }

                return todo;
            });

            // storage.set('TODOS', newTodos);

            return {
                ...state,
                todos: {
                    ...state.todos,
                    list: newTodos
                }
            };
        }

        case 'FILTER': {
            return {
                ...state,
                todos: {
                    ...state.todos,
                    filters: {
                        ...state.todos.filters,
                        current: action.payload
                    }
                }
            };
        }

        case 'CLEAR-COMPLETED': {
            const newTodos = [...state.todos.list].filter(state.todos.filters.types.active);

            // storage.set('TODOS', newTodos);

            return {
                ...state,
                todos: {
                    ...state.todos,
                    list: newTodos
                }
            };
        }

        case 'DELETE': {
            const newTodos = [...state.todos.list].filter((todo) => {
                return todo.id !== action.payload.id && todo;
            });

            // storage.set('TODOS', newTodos);

            return {
                ...state,
                todos: {
                    ...state.todos,
                    list: newTodos
                }
            };
        }

        default:
            return state;
    }
};

export default rootReducer;
