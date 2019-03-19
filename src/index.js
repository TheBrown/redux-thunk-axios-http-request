import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';

import { Provider } from 'react-redux'
import configStore from './redux/store';

const store = configStore()

const MyApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(<MyApp />, document.getElementById('root'));

