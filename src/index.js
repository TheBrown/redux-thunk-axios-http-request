import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';

import { Provider } from 'react-redux'
import store from './redux/store';

const MyApp = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(<MyApp />, document.getElementById('root'));

