const actionTypes = Object.freeze({
    APP: {
        CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
    },
    TODOS: {
        ADD: 'ADD',
        UPDATE: 'UPDATE',
        TOGGLE_COMPLETE_ALL: 'TOGGLE_COMPLETE_ALL',
        TOGGLE_COMPLETE: 'TOGGLE_COMPLETE',
        FILTER: 'FILTER',
        CLEAR_COMPLETED: 'CLEAR_COMPLETED',
        DELETE: 'DELETE',
    },
});

export default actionTypes;
