import React from 'react';

import { Albums } from './includes/Albums.jsx';




require('./Body.less');

export class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        };
    }

  componentWillMount() {
         $.ajax({
            url: 'https://jsonplaceholder.typicode.com/albums',
            type: 'GET',
          success: (data, textStatus, XMLHttpRequest) => {
                if (data) {
                    this.setState({albums: data})
                }
            },
            error: function(err){
                console.log('ERROR: ', err);
            }
        })
    }

    componentDidMount() {
       
    }


    render(){

        return (
            <div className="body">
                <Albums albums={this.state.albums} />
            </div>  
        )
    }
}


