import React from 'react';
import { FormattedMessage } from 'react-intl';

class Footer extends React.Component {
	handleFilterTodo = (type) => {
		const { handleFilterTodo } = this.props;
		handleFilterTodo(type);
	};

	handleClearCompletedTodo = () => {
		const { handleClearCompletedTodo } = this.props;
		handleClearCompletedTodo();
	};

	render() {
		const { todos, filters } = this.props;

		return (
			<>
				<footer className="footer">
					<span className="todo-count">
						<strong>{todos && todos.filter((todo) => !todo.isCompleted).length}</strong>{' '}
						<FormattedMessage id="app.todos.items.left" />
					</span>
					<ul className="filters">
						{Object.keys(filters.types).map((type) => {
							return (
								<li key={type}>
									<a
										className={`${filters.current === type ? 'selected' : ''}`}
										href="# "
										onClick={() => this.handleFilterTodo(type)}
									>
										<FormattedMessage id={`app.todos.items.${type}`} />
									</a>
								</li>
							);
						})}
					</ul>
					{todos && todos.some((todo) => todo.isCompleted) ? (
						<a
							className="clear-completed text-decoration-none text-secondary"
							href="# "
							onClick={() => this.handleClearCompletedTodo()}
						>
							<FormattedMessage id="app.todos.actions.clear-completed" />
						</a>
					) : (
						''
					)}
				</footer>
			</>
		);
	}
}

export default Footer;
