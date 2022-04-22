import React from 'react';
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

	handleChangeLanguage = (language) => {
		const { handleChangeLanguage } = this.props;
		handleChangeLanguage(language);
	};

	render() {
		const { title } = this.state;
		const { intl, language } = this.props;
		const todosPlaceholder = intl.formatMessage({ id: 'app.todos.title' });

		return (
			<>
				<header className="header">
					<h1>Todos</h1>
					<div className="utils">
						<div className="languages">
							<span
								className={language === 'vi' ? 'active' : ''}
								onClick={() => this.handleChangeLanguage('vi')}
							>
								VI
							</span>
							{' / '}
							<span
								className={language === 'en' ? 'active' : ''}
								onClick={() => this.handleChangeLanguage('en')}
							>
								EN
							</span>
						</div>
					</div>
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

export default injectIntl(Header);
