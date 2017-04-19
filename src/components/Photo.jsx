import React from 'react';
import PropTypes from 'prop-types';

require('./Photo.less');

export class Photo extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            photos: [],
        };
    }

    componentWillMount() {
         $.ajax({
            url: 'https://jsonplaceholder.typicode.com/photos/' + this.context.router.params.id,
            type: 'GET',
            success: (data, textStatus, XMLHttpRequest) => {
                if (data) {
                    this.setState({
                        photos: data,
                    })
                }
            },
            error: function(err){
                console.log('ERROR: ', err);
            }
        })
    }

    render(){
        let photo = this.state.photos

        return (
            <div className="photo-content" key={photo.id}>
              <div className="image"><img src={photo.url} alt="" /></div>
              <div className="title">{photo.title}</div>
            </div>  
        )
    }
}

Photo.contextTypes = {
  router: PropTypes.object.isRequired
};
