import React from 'react';

import PropTypes from 'prop-types';
import imagesLoaded from 'imagesloaded';
import InfiniteScroll from 'react-infinite-scroller';

require('./Album.less');


export class Album extends React.Component {
    
    constructor(props) {
        super(props)
        this.handleShowPhotos = this.handleShowPhotos.bind(this);
        this.handleLoadMore = this.handleLoadMore.bind(this);
        this.state = {
            album: [],
            photoShow: [],
        };
    }

    componentWillMount() {
         $.ajax({
            url: 'https://jsonplaceholder.typicode.com/photos?albumId=' + this.context.router.params.id,
            type: 'GET',
            success: (data, textStatus, XMLHttpRequest) => {
                if (data) {
                    let photoShow = data.slice(0, 20);

                    this.setState({
                        album: data,
                        photoShow
                    })
                }
            },
            error: function(err){
                console.log('ERROR: ', err);
            }
        })
    }

    componentDidMount() {
        let grid = document.getElementsByClassName('grid-wrap')[0];
        imagesLoaded( grid , () => {
            this.msnry = new Masonry( grid, {
                itemSelector: '.single-photo',
                gutter: 0,
                transitionDuration: '0.0s'
            });
        });
    }

    componentDidUpdate() {
          imagesLoaded( document.getElementsByClassName('grid-wrap')[0], () => {
            this.msnry.reloadItems();
            this.msnry.layout();
        });

    }

    handleShowPhotos(el) {
        this.context.router.push(`/photos-id-${el.id}`);
    }

    handleLoadMore() {
        console.log('Run')
        let photoOnPage = this.state.photoShow.length;
        if (photoOnPage) {
            let newData = this.state.album.slice(0, photoOnPage + 19 )
            this.setState({photoShow: newData})
        }
    }

    render(){

        return (
            <div className="album-wrapper">
                <InfiniteScroll 
                    style={{width: '100%'}} 
                    hasMore={true}
                    threshold={500}
                    initialLoad={false}
                    loadMore={this.handleLoadMore}
                    id="itemGrid"
                >
                    <div className="grid-wrap" >
                        { this.state.photoShow.length ? 
                            this.state.photoShow.map((el, ind) => {
                                return (
                                    <div 
                                        className="single-photo" 
                                        key={ind}
                                        onClick={this.handleShowPhotos.bind(null, el)}
                                    >
                                        <div className="image">
                                            <img src={el.thumbnailUrl} />
                                        </div>
                                        <div className="title">{el.title}</div>
                                    </div>
                                )
                            }) : ''
                        }
                    </div>
                </ InfiniteScroll>
            </div>
        )
    }
}

Album.contextTypes = {
  router: PropTypes.object.isRequired
};
