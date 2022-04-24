import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import '../../../styles/NotFound.scss';

class NotFound extends React.Component {
	render() {
		return (
			<>
				<div className="error-template">
					<h1>Oops!</h1>
					<h2>
						<FormattedMessage id="app.others.not-found-title" />
					</h2>
					<div className="error-details">
						<FormattedMessage id="app.others.not-found-message" />
					</div>
					<div className="error-actions">
						<NavLink className="btn btn-primary" to="/">
							<FormattedMessage id="app.others.back-to-home" />
						</NavLink>
					</div>
				</div>
			</>
		);
	}
}

export default NotFound;
