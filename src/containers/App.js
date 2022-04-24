import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/vendor/fontawesome5/css/all.min.css';
import '../styles/Base.scss';
import Main from './Main';

class App extends React.Component {
	render() {
		return (
			<>
				<Router>
					<Switch>
						<Route path="/" component={Main} />
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
