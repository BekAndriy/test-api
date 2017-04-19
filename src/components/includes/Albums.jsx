import React from 'react';
require('./Albums.less');

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

import PropTypes from 'prop-types';

export class Albums extends React.Component {
    constructor(props) {
        super(props)
        this.handleOpenAlbum = this.handleOpenAlbum.bind(this)
    }

    handleOpenAlbum(el) {
        this.context.router.push(`/photos-album-id-${el.id}`);
    }

    render(){

        return (
            <MuiThemeProvider>   
                        <List>
                        <Subheader>Albums</Subheader>
                            {
                                this.props.albums.map((el, ind) => {
                                    return (
                                        <ListItem key={ind}
                                            primaryText={el.title}
                                            leftAvatar={<Avatar src="images/ok-128.jpg" />}
                                            rightIcon={<ArrowRight />}
                                            onClick={this.handleOpenAlbum.bind(null, el)}
                                        />
                                    )
                                })
                            } 
                        </List>
                </ MuiThemeProvider>
        )
    }
}

Albums.contextTypes = {
  router: PropTypes.object.isRequired
};
