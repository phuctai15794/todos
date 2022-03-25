import React from 'react';

class Footer extends React.Component {
    handleFilterTodo = (type) => {
        const { handleFilterTodo } = this.props;
        handleFilterTodo(type);
    }

    handleClearCompletedTodo = () => {
        const { handleClearCompletedTodo } = this.props;
        handleClearCompletedTodo();
    }

    render() {
        const { todos, filters } = this.props;

        return (
            <>
                <footer className="footer">
                    <span className="todo-count">
                        <strong>{todos && todos.filter(todo => !todo.isCompleted).length}</strong> item left
                    </span>
                    <ul className="filters">
                        {
                            Object.keys(filters.types).map(type => {
                                return (
                                    <li key={type}>
                                        <a
                                            className={`${filters.current === type ? 'selected' : ''}`}
                                            href="# "
                                            onClick={() => this.handleFilterTodo(type)}
                                        >
                                            {type[0].toUpperCase() + type.slice(1)}
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    {
                        todos && todos.some(todo => todo.isCompleted)
                            ?
                            <button
                                className="clear-completed"
                                onClick={() => this.handleClearCompletedTodo()}
                            >
                                Clear completed
                            </button>
                            :
                            ''
                    }
                </footer>
            </>
        );
    }
}

export default Footer;
