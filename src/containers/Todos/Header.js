import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { toast } from 'react-toastify';
import { userActions } from '../../store/actions/rootActions';

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
		const { isLoggedIn, userInfo, intl, language, LogoutUser } = this.props;
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
						{isLoggedIn ? (
							<div className="user">
								<span className="user-hello">
									<FormattedMessage id="app.user.hello" />,{' '}
									<strong>{userInfo && userInfo.fullName}</strong>!
								</span>
								<a className="user-logout text-danger ms-2" href="# " onClick={LogoutUser}>
									<FormattedMessage id="app.user.logout" />
								</a>
							</div>
						) : (
							''
						)}
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

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.user.isLoggedIn,
		userInfo: state.user.userInfo,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		LogoutUser: () => dispatch(userActions.userLogout()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Header));
