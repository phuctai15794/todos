import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxStore from "./redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./assets/vendor/fontawesome5/css/all.min.css";
import App from './views/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
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
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
