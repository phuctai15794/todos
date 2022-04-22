import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../store/actions/rootActions';
import { Form, FormGroup, Label, Alert, InputGroup, Input, InputGroupText, Button } from 'reactstrap';

class Login extends React.Component {
	state = {
		username: '',
		password: '',
		isShowPassword: false,
		message: ''
	};

	handleOnChangeLogin = (event, type) => {
		this.setState({
			[type]: event.target.value
		});
	};

	handleOnClickShowHidePassword = () => {
		this.setState({
			isShowPassword: !this.state.isShowPassword
		});
	};

	handleLogin = () => {
		let isValid = true;
		let message = '';
		const { username, password } = this.state;

		if (!username) {
			isValid = false;
			message = 'Please enter your username';
		} else if (!password) {
			isValid = false;
			message = 'Please enter your password';
		}

		if (isValid) {
			const { LoginUser } = this.props;
			message = LoginUser({ username, password });
		}

		this.setState({
			message
		});
	};

	render() {
		const { username, password, isShowPassword, message } = this.state;

		return (
			<>
				{message ? <Alert color="danger">{message}</Alert> : ''}
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
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		LoginUser: (userInfo) => dispatch(userActions.userLogin(userInfo))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
