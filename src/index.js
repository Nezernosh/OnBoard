import ReactDOM from 'react-dom';
import React from 'react';
import Body from './components/Body';
import {Provider} from 'mobx-react';
import NameStore from './stores/name';

const root = <Provider nameStore={NameStore}><Body /></Provider>;

ReactDOM.render(root, document.getElementById('root'));