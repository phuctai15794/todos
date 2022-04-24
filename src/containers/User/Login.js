import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { userActions } from '../../store/actions/rootActions';
import {
	Card,
	CardHeader,
	CardBody,
	Form,
	FormGroup,
	Label,
	InputGroup,
	Input,
	InputGroupText,
	Button,
} from 'reactstrap';
import { userLoginService } from '../../services/userService';
import '../../styles/Login.scss';

class Login extends React.Component {
	state = {
		username: '',
		password: '',
		isShowPassword: false,
		message: {
			text: '',
			type: '',
		},
	};

	handleOnChangeLogin = (event, type) => {
		this.setState({
			[type]: event.target.value,
		});
	};

	handleOnClickShowHidePassword = () => {
		this.setState({
			isShowPassword: !this.state.isShowPassword,
		});
	};

	handleOnKeyPressLogin = (event) => {
		if (event.which === 13) {
			this.handleLogin();
		} else {
			this.setState({
				message: {
					type: '',
					text: '',
				},
			});
		}
	};

	handleLogin = () => {
		let isValid = true;
		let message = {
			text: '',
			type: '',
		};
		const { username, password } = this.state;

		if (!username) {
			isValid = false;
			message.text = 'app.user.please-enter-your-username';
			message.type = 'error';
		} else if (!password) {
			isValid = false;
			message.text = 'app.user.please-enter-your-password';
			message.type = 'error';
		}

		if (isValid) {
			const response = userLoginService({ username, password });

			if (response) {
				const { LoginUser } = this.props;
				LoginUser(response);
			} else {
				message.text = 'app.user.login-failed';
				message.type = 'error';
			}
		}

		if (message.text !== '') {
			this.setState({
				message,
			});
		}
	};

	render() {
		const { username, password, isShowPassword, message } = this.state;
		const { intl } = this.props;
		const langPlaceholders = {
			username: intl.formatMessage({ id: 'app.user.enter-your-username' }),
			password: intl.formatMessage({ id: 'app.user.enter-your-password' }),
		};
		const langMessage = message.text && intl.formatMessage({ id: message.text });

		return (
			<>
				<div className="section-login">
					<Card>
						<CardHeader>
							<FormattedMessage id="app.user.login" />
						</CardHeader>
						<CardBody>
							{langMessage ? (
								<div className={`alert alert-${message.type === 'error' ? 'danger' : 'success'}`}>
									{langMessage}
								</div>
							) : (
								''
							)}
							<Form>
								<FormGroup>
									<Label for="username">
										<strong>
											<FormattedMessage id="app.user.username" />:
										</strong>
									</Label>
									<Input
										type="text"
										id="username"
										name="username"
										placeholder={langPlaceholders.username}
										value={username}
										onChange={(event) => this.handleOnChangeLogin(event, 'username')}
										onKeyPress={(event) => this.handleOnKeyPressLogin(event)}
									/>
								</FormGroup>
								<FormGroup>
									<Label for="password">
										<strong>
											<FormattedMessage id="app.user.password" />:
										</strong>
									</Label>
									<InputGroup>
										<Input
											type={isShowPassword ? 'text' : 'password'}
											id="password"
											name="password"
											placeholder={langPlaceholders.password}
											value={password}
											onChange={(event) => this.handleOnChangeLogin(event, 'password')}
											onKeyPress={(event) => this.handleOnKeyPressLogin(event)}
										/>
										<InputGroupText onClick={() => this.handleOnClickShowHidePassword()}>
											<i className={`fas ${isShowPassword ? ' fa-eye-slash' : 'fa-eye'}`}></i>
										</InputGroupText>
									</InputGroup>
								</FormGroup>
								<div className="text-center">
									<Button
										className="mb-2"
										color="primary"
										onClick={() => {
											this.handleLogin();
										}}
									>
										<FormattedMessage id="app.user.login" />
									</Button>
									<div className="text-center">
										<p className="mb-1">
											<FormattedMessage id="app.others.or" />
										</p>
										<NavLink className="text-dark" to="/signup">
											<FormattedMessage id="app.user.create-account" />
										</NavLink>
									</div>
								</div>
							</Form>
						</CardBody>
					</Card>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		LoginUser: (userInfo) => dispatch(userActions.userLogin(userInfo)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Login));
