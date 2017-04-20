import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import actions from './common.js';
require('./Photo.less');

export class Photo extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            photos: [],
        };
    }

    componentWillMount() {
         actions.getPhoto(this.context.router.params.id, (data) => {
            this.setState({
                photos: data,
            })
         })
    }

    render(){
        let data = this.state.photos;
        let photo = actions.replaceUrl(this.state.photos.url);
        return (
            <div className="photo-content" key={data.id}>
              <div className="image"><img src={photo} alt="" /></div>
              <div className="title">{data.title}</div>
            </div>  
        )
    }
}

Photo.contextTypes = {
  router: PropTypes.object.isRequired
};

