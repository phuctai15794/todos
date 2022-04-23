import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, NavLink } from 'react-router-dom';
import { isAuthenticatedHoC } from '../../hoc/AuthenticationHoC';
import Home from './Home';
import Todos from '../Todos';

class Page extends Component {
	render() {
		return (
			<>
				<nav className="navbar navbar-expand-md navbar-light bg-light border-bottom mb-4">
					<div className="container-fluid">
						<NavLink className="navbar-brand" to="" title="Todos App">
							Todos App
						</NavLink>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-0">
								<li className="nav-item">
									<NavLink className="nav-link active" to="/">
										Home
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" to="/todos">
										Todos
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<div className="container">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/todos" exact component={isAuthenticatedHoC(Todos)} />
					</Switch>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
