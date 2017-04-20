import React from 'react';
import { Albums } from './Albums.jsx';
import PropTypes from 'prop-types';
import actions from './common.js';
import $ from 'jquery';

require('./Body.less');

export class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: []
        };
    }

  componentWillMount() {
         actions.getAlbums((data)=>{
             this.setState({albums: data})
         })
    }

    render(){

        return (
            <div className="body">
                <Albums albums={this.state.albums} />
            </div>  
        )
    }
}

Body.contextTypes = {
  router: PropTypes.object.isRequired
};
