import React from 'react';
import { connect } from 'react-redux';
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
			message.text = 'Please enter your username';
			message.type = 'error';
		} else if (!password) {
			isValid = false;
			message.text = 'Please enter your password';
			message.type = 'error';
		}

		if (isValid) {
			const response = userLoginService({ username, password });

			if (response) {
				const { LoginUser } = this.props;
				LoginUser(response);
			} else {
				message.text = 'Login failed';
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

		return (
			<>
				<div className="section-login">
					<Card>
						<CardHeader>Login</CardHeader>
						<CardBody>
							{message.text ? (
								<div className={`alert alert-${message.type === 'error' ? 'danger' : 'success'}`}>
									{message.text}
								</div>
							) : (
								''
							)}
							<Form>
								<FormGroup>
									<Label for="username">
										<strong>Username:</strong>
									</Label>
									<Input
										type="text"
										id="username"
										name="username"
										placeholder="Enter your username"
										value={username}
										onChange={(event) => this.handleOnChangeLogin(event, 'username')}
										onKeyPress={(event) => this.handleOnKeyPressLogin(event)}
									/>
								</FormGroup>
								<FormGroup>
									<Label for="password">
										<strong>Password:</strong>
									</Label>
									<InputGroup>
										<Input
											type={isShowPassword ? 'text' : 'password'}
											id="password"
											name="password"
											placeholder="Enter your password"
											value={password}
											onChange={(event) => this.handleOnChangeLogin(event, 'password')}
											onKeyPress={(event) => this.handleOnKeyPressLogin(event)}
										/>
										<InputGroupText onClick={() => this.handleOnClickShowHidePassword()}>
											<i className={`fas ${isShowPassword ? ' fa-eye-slash' : 'fa-eye'}`}></i>
										</InputGroupText>
									</InputGroup>
								</FormGroup>
								<Button
									onClick={() => {
										this.handleLogin();
									}}
								>
									Login
								</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
