import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { isNotAuthenticatedHoC } from '../hoc/AuthenticationHoC';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/vendor/fontawesome5/css/all.min.css';
import '../styles/Base.scss';
import Page from './Layouts/Page';
import Login from './User/Login';

class App extends React.Component {
	render() {
		return (
			<>
				<Router>
					<Switch>
						<Route path="/login" component={isNotAuthenticatedHoC(Login)} />
						<Route path="/" component={Page} />
					</Switch>
				</Router>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</>
		);
	}
}

export default App;
