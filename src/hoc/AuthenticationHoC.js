import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

export const isAuthenticatedHoC = (Component) => {
	class CheckAuthenticated extends React.Component {
		render() {
			const { isLoggedIn, location } = this.props;
			const redirectPath = (location.pathname && location.pathname !== '/' && `?back=${location.pathname}`) || '';
			return <>{isLoggedIn ? <Component {...this.props} /> : <Redirect to={`/login${redirectPath}`} />}</>;
		}
	}

	const mapStateToProps = (state) => {
		return {
			isLoggedIn: state.user.isLoggedIn,
		};
	};

	const mapDispatchToProps = (dispatch) => {
		return {};
	};

	return connect(mapStateToProps, mapDispatchToProps)(withRouter(CheckAuthenticated));
};

export const isNotAuthenticatedHoC = (Component) => {
	class CheckAuthenticated extends React.Component {
		render() {
			const { isLoggedIn, location } = this.props;
			const { pathname, search } = location;
			const queryParams = new URLSearchParams(search);
			const redirectBack = queryParams.get('back');
			const redirectPath = pathname !== '/login' ? pathname : redirectBack || '/';

			return <>{!isLoggedIn ? <Component {...this.props} /> : <Redirect to={redirectPath} />}</>;
		}
	}

	const mapStateToProps = (state) => {
		return {
			isLoggedIn: state.user.isLoggedIn,
		};
	};

	const mapDispatchToProps = (dispatch) => {
		return {};
	};

	return connect(mapStateToProps, mapDispatchToProps)(withRouter(CheckAuthenticated));
};
