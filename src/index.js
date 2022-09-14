import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './redux/store';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import AppWithoutRedux from "./withoutRedux/AppWithoutRedux";

const store = configureStore();

const Core = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

// const Core = () => (
//     <AppWithoutRedux/>
// );

// Uncomment above code and comment Core function above it, in short replace comment among those to similar Core function to see the difference between Using Redux and Not using it.

ReactDOM.render(<Core/>, document.getElementById('root'));

serviceWorker.unregister();
