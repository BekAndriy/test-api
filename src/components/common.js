import $ from 'jquery';

let replaceUrl = function (url) {
     if(typeof(url) === 'string' && location.protocol === 'https:') {
        let sel = /^(http:)/g;
        let newUrl = url.replace(sel, 'https:');
        return newUrl;
    } else {
        return url;
    }  
}

let getPhotos = (id, callback) => {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos?albumId=' + id,
        type: 'GET',
        success: (data, textStatus, XMLHttpRequest) => {
            if (data) {
                callback(data);
            }
        },
        error: function(err){
            console.log('ERROR: ', err);
        }
    })
}

let getPhoto = (id, callback) => {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos/' + id,
        type: 'GET',
        success: (data, textStatus, XMLHttpRequest) => {
            if (data) {
                callback(data);
            }
        },
        error: function(err){
            console.log('ERROR: ', err);
        }
    })
}

let getAlbums = (callback) => {
    $.ajax({
            url: 'https://jsonplaceholder.typicode.com/albums',
            type: 'GET',
            success: (data, textStatus, XMLHttpRequest) => {
                if (data) {
                    callback(data);
                    
                }
            },
            error: function(err){
                console.log('ERROR: ', err);
            }
        })
}

let actions = {};

actions.replaceUrl = replaceUrl;
actions.getPhotos = getPhotos;
actions.getPhoto = getPhoto;
actions.getAlbums = getAlbums;


module.exports = actions;