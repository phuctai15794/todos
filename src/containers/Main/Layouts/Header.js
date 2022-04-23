import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { userActions } from '../../../store/actions/rootActions';
import Nav from './Nav';

class Header extends Component {
	handleChangeLanguage = (language) => {
		const { handleChangeLanguage } = this.props;
		handleChangeLanguage(language);
	};

	render() {
		const { isLoggedIn, userInfo, language, LogoutUser } = this.props;

		return (
			<>
				<div className="header bg-light border-bottom">
					<div className="container py-2">
						<Nav />
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
				</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
