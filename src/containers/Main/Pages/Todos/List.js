import React from 'react';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import HtmlRaw from '../../../../utils/HtmlRaw';

class List extends React.Component {
	state = {
		nowTodo: {},
		editTodo: {},
	};

	handleEditTodo = (todo) => {
		this.setState({
			nowTodo: todo,
			editTodo: todo,
		});
	};

	handleOnChangeEditTodo = (event) => {
		const newTodo = { ...this.state.editTodo };
		newTodo.title = event.target.value;

		this.setState({
			editTodo: newTodo,
		});
	};

	handleOnKeyPressEditTodo = (event) => {
		if (event.which === 13) {
			const { nowTodo, editTodo } = this.state;

			if (nowTodo.title === editTodo.title) {
				toast.warning('Nothing changes');
			} else {
				const { handleUpdateTodo } = this.props;
				handleUpdateTodo(editTodo);
			}

			this.setState({
				nowTodo: {},
				editTodo: {},
			});
		}
	};

	handleToggleCompleteAllTodo = (event) => {
		const isCompletedAll = event.target.checked;
		const { handleToggleCompleteAllTodo } = this.props;
		handleToggleCompleteAllTodo(isCompletedAll);
	};

	handleToggleCompleteTodo = (todo) => {
		if (todo) {
			const { handleToggleCompleteTodo } = this.props;
			handleToggleCompleteTodo(todo);
		} else {
			toast.error('Data is invalid');
		}
	};

	handleDeleteTodo = (todo) => {
		if (todo) {
			const { handleDeleteTodo } = this.props;

			confirmAlert({
				title: 'Confirm to delete',
				childrenElement: () => {
					return (
						<>
							<HtmlRaw>{`Are you sure to do this with <strong>${todo.title}</strong>.`}</HtmlRaw>
						</>
					);
				},
				buttons: [
					{
						label: 'No',
						className: 'btn btn-sm btn-secondary',
					},
					{
						label: 'Yes',
						className: 'btn btn-sm btn-danger',
						onClick: () => {
							handleDeleteTodo(todo);
						},
					},
				],
			});
		} else {
			toast.error('Data is invalid');
		}
	};

	handleESC = (event) => {
		if (event.which === 27) {
			this.setState({
				nowTodo: {},
				editTodo: {},
			});
		}
	};

	componentDidMount() {
		document.addEventListener('keydown', this.handleESC);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleESC);
	}

	render() {
		const { editTodo } = this.state;
		const { todos, filters } = this.props;

		return (
			<section className="main">
				<input
					id="toggle-all"
					className="toggle-all"
					type="checkbox"
					checked={todos.every((todo) => todo.isCompleted === true) && 'checked'}
					onChange={(event) => this.handleToggleCompleteAllTodo(event)}
				/>
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
					{todos.length
						? todos.filter(filters.types[filters.current]).map((todo) => {
								const isEditable = editTodo && editTodo.id === todo.id;
								const isCompleted = todo.isCompleted;

								return (
									<li
										className={`${isEditable ? 'editing' : ''} ${isCompleted ? 'completed' : ''}`}
										key={todo.id}
									>
										<div className="view">
											<input
												className="toggle"
												type="checkbox"
												checked={`${isCompleted ? 'checked' : ''}`}
												onChange={() => this.handleToggleCompleteTodo(todo)}
											/>
											<label>{todo.title}</label>
											{!isCompleted ? (
												<a className="edit" href="# " onClick={() => this.handleEditTodo(todo)}>
													<i className="fas fa-edit"></i>
												</a>
											) : (
												''
											)}
											<a
												className="destroy"
												href="# "
												onClick={() => this.handleDeleteTodo(todo)}
											>
												<i className="fas fa-times"></i>
											</a>
										</div>
										{isEditable && !isCompleted ? (
											<input
												className="edit-input"
												value={editTodo.title}
												onChange={(event) => this.handleOnChangeEditTodo(event)}
												onKeyPress={(event) => this.handleOnKeyPressEditTodo(event)}
											/>
										) : (
											''
										)}
									</li>
								);
						  })
						: ''}
				</ul>
			</section>
		);
	}
}

export default List;
