import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { isAuthenticated, isNotAuthenticated } from '../hoc/Authentication';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/vendor/fontawesome5/css/all.min.css';
import '../styles/Base.scss';
import Home from './Layouts/Home';
import Todos from './Todos';
import Login from './User/Login';

class App extends React.Component {
	render() {
		return (
			<>
				<Router>
					<Route path="/" exact component={isAuthenticated(Home)} />
					<Route path="/login" component={isNotAuthenticated(Login)} />
					<Route path="/todos" component={isAuthenticated(Todos)} />
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
