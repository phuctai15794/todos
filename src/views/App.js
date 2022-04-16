import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/vendor/fontawesome5/css/all.min.css';
import { appActions, todoActions } from '../store/actions/rootActions';
import HtmlRaw from '../utils/HtmlRaw';
import '../styles/App.css';
import Header from './Header';
import List from './List';
import Footer from './Footer';

class App extends React.Component {
    handleAddTodo = (todo) => {
        const isEmpty = Object.keys(this.props.todo.list) === 0;
        const isExist = !isEmpty && this.props.todo.list.some((item) => item.title === todo.title);

        if (!isExist) {
            this.props.addTodoRedux(todo);
            toast.success(<HtmlRaw>{`Add <strong>${todo.title}</strong> successfully`}</HtmlRaw>);
        } else {
            toast.error('Todo already exists');
        }
    };

    handleUpdateTodo = (todo) => {
        if (todo) {
            this.props.updateTodoRedux(todo);
            toast.success(<HtmlRaw>{`Updated <strong>${todo.title}</strong> successfully`}</HtmlRaw>);
        } else {
            toast.error('Data is invalid');
        }
    };

    handleDeleteTodo = (todo) => {
        if (todo) {
            this.props.deleteTodoRedux(todo);
            toast.success(<HtmlRaw>{`Deleted <strong>${todo.title}</strong> successfully`}</HtmlRaw>);
        } else {
            toast.error('Data is invalid');
        }
    };

    handleToggleCompleteAllTodo = (isCompletedAll) => {
        this.props.toggleCompleteAllTodoRedux(isCompletedAll);

        if (isCompletedAll) {
            toast.success(<HtmlRaw>{`All todos completed`}</HtmlRaw>);
        } else {
            toast.warning(<HtmlRaw>{`All todos is not completed`}</HtmlRaw>);
        }
    };

    handleToggleCompleteTodo = (todo) => {
        if (todo) {
            this.props.toggleCompleteTodoRedux(todo);

            if (todo.isCompleted) {
                toast.success(<HtmlRaw>{`<strong>${todo.title}</strong> completed`}</HtmlRaw>);
            } else {
                toast.warning(<HtmlRaw>{`<strong>${todo.title}</strong> is not completed`}</HtmlRaw>);
            }
        } else {
            toast.error('Data is invalid');
        }
    };

    handleFilterTodo = (type) => {
        this.props.filterTodoRedux(type);
    };

    handleClearCompletedTodo = () => {
        this.props.clearCompletedTodoRedux();
        toast.success('Clear todos completed successfully');
    };

    handleChangeLanguage = (language) => {
        this.props.changeLanguage(language);
    };

    render() {
        const { list, filters } = this.props.todo;
        const language = this.props.language;

        return (
            <>
                <section className="todoapp">
                    <Header
                        language={language}
                        handleChangeLanguage={this.handleChangeLanguage}
                        handleAddTodo={this.handleAddTodo}
                    />
                    <List
                        todos={list}
                        filters={filters}
                        handleUpdateTodo={this.handleUpdateTodo}
                        handleToggleCompleteAllTodo={this.handleToggleCompleteAllTodo}
                        handleToggleCompleteTodo={this.handleToggleCompleteTodo}
                        handleDeleteTodo={this.handleDeleteTodo}
                    />
                    <Footer
                        todos={list}
                        filters={filters}
                        handleFilterTodo={this.handleFilterTodo}
                        handleClearCompletedTodo={this.handleClearCompletedTodo}
                    />
                </section>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        todo: state.todo
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage: (language) => dispatch(appActions.CHANGE_LANGUAGE(language)),
        addTodoRedux: (todoNew) => dispatch(todoActions.ADD(todoNew)),
        updateTodoRedux: (todoUpdate) => dispatch(todoActions.UPDATE(todoUpdate)),
        toggleCompleteAllTodoRedux: (isCompletedAll) => dispatch(todoActions.TOGGLE_COMPLETE_ALL(isCompletedAll)),
        toggleCompleteTodoRedux: (todoComplete) => dispatch(todoActions.TOGGLE_COMPLETE(todoComplete)),
        filterTodoRedux: (type) => dispatch(todoActions.FILTER(type)),
        clearCompletedTodoRedux: () => dispatch(todoActions.CLEAR_COMPLETED()),
        deleteTodoRedux: (todoDelete) => dispatch(todoActions.DELETE(todoDelete))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
