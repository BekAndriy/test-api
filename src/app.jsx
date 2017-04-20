import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from './redux/reducer.js';
import { Header } from './components/Header.jsx';
import { Body } from './components/Body.jsx';
import { Album } from './components/Album.jsx';
import { Photo } from './components/Photo.jsx';
require('./components/Common.less');
import $ from 'jquery';

export class App extends React.Component {
  render(){
        return (
            <Provider store={store}>
            <Router history={hashHistory}>
                <Route name='Main page' path='/' component={Header}>
                    <Route name='Albums' path='albums' component={Body} />
                    <Route name='Album' path='photos-album-id-:id' component={Album} />
                    <Route name='Photo' path='photos-id-:id' component={Photo} />
                </ Route>
            </ Router>
            </ Provider>
        ) 
    }
}
