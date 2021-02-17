import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <header className="p-1"></header>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-3 col-lg-2 d-md-block sidebar collapse">
            </div>
            <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="pt-3 pb-2 mb-3 border-bottom">
                    <App />
                </div>
            </div>
        </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
