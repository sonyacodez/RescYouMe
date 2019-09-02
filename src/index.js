import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./stores/UserStore"
import { Provider } from 'mobx-react'
import {run} from './service'

const store = {UserStore}

ReactDOM.render(<Provider {...store}><App /></Provider>, document.getElementById('root'));

run();


