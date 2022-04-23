import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
	render() {
		return (
			<>
				<footer className="bg-light rounded-1 text-center border-top px-3 py-4">
					<div className="container">
						<h2 className="mb-4">Todos App</h2>

						<section className="mb-2">
							<div className="row d-flex justify-content-center">
								<div className="col-lg-8">
									<p>
										Quisquam expedita aut doloremque vitae rerum quibusdam ut sed. In aut vel et
										blanditiis aut et. Qui quisquam et minus cumque error omnis consequatur.
									</p>
								</div>
							</div>
						</section>

						<section className="text-center">
							<i className="fab fa-facebook-f me-2"></i>
							<i className="fab fa-twitter me-2"></i>
							<i className="fab fa-google me-2"></i>
							<i className="fab fa-instagram me-2"></i>
							<i className="fab fa-linkedin me-2"></i>
							<i className="fab fa-github"></i>
						</section>

						<hr />

						<div className="text-center">© 2022 Copyright: Todos App</div>
					</div>
				</footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
