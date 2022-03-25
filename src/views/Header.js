import React from 'react';
import { toast } from 'react-toastify';

class Header extends React.Component {
    state = {
        title: ''
    }

    handleOnChangeTodo = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    handleOnKeyPressTodo = (event) => {
        if (event.which === 13) {
            const { title } = this.state;
            const { handleAddTodo } = this.props;

            if (!title) {
                toast.error('Please enter your todo');
                return;
            }
            else {
                handleAddTodo({
                    id: Math.floor(Math.random() * 1000),
                    title: title
                });

                this.setState({
                    title: ''
                });
            }
        }
    }

    render() {
        const { title } = this.state;

        return (
            <>
                <header className="header">
                    <h1>Todos</h1>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        value={title}
                        onChange={(event) => this.handleOnChangeTodo(event)}
                        onKeyPress={(event) => this.handleOnKeyPressTodo(event)}
                    />
                </header>
            </>
        );
    }
}

export default Header;
