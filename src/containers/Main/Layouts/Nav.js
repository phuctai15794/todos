import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

class Nav extends Component {
	render() {
		return (
			<>
				<div className="nav">
					<NavLink className="nav-brand" to="" title="Todos App">
						Todos App
					</NavLink>
					<div className="nav-list">
						<ul>
							<li>
								<NavLink exact activeClassName="active" to="/">
									<FormattedMessage id="app.menu.home" />
								</NavLink>
							</li>
							<li>
								<NavLink activeClassName="active" to="/todos">
									Todos
								</NavLink>
							</li>
						</ul>
					</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
