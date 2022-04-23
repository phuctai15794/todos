import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { isAuthenticatedHoC } from '../../hoc/AuthenticationHoC';
import { appActions } from '../../store/actions/rootActions';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Home from './Pages/Home';
import Todos from './Pages/Todos';

class Page extends Component {
	handleChangeLanguage = (language) => {
		this.props.changeLanguage(language);
	};

	render() {
		const language = this.props.language;

		return (
			<>
				<Header language={language} handleChangeLanguage={this.handleChangeLanguage} />
				<div className="container py-5">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/todos" exact component={isAuthenticatedHoC(Todos)} />
					</Switch>
				</div>
				<Footer />
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		language: state.app.language,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeLanguage: (language) => dispatch(appActions.CHANGE_LANGUAGE(language)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
