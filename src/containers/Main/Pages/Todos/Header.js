import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { toast } from 'react-toastify';

class Header extends React.Component {
	state = {
		title: '',
	};

	handleOnChangeTodo = (event) => {
		this.setState({
			title: event.target.value,
		});
	};

	handleOnKeyPressTodo = (event) => {
		if (event.which === 13) {
			const { title } = this.state;
			const { handleAddTodo } = this.props;

			if (!title) {
				toast.error('Please enter your todo');
				return;
			} else {
				handleAddTodo({
					id: Math.floor(Math.random() * 1000),
					title: title,
				});

				this.setState({
					title: '',
				});
			}
		}
	};

	render() {
		const { title } = this.state;
		const { intl } = this.props;
		const todosPlaceholder = intl.formatMessage({ id: 'app.todos.title' });

		return (
			<>
				<header className="header">
					<div className="utils"></div>
					<input
						className="new-todo"
						placeholder={todosPlaceholder}
						value={title}
						onChange={(event) => this.handleOnChangeTodo(event)}
						onKeyPress={(event) => this.handleOnKeyPressTodo(event)}
					/>
				</header>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Header));
