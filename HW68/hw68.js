(function(){
    'use strict';
    const displayPix = $('#displayPix');
    $('#searchButton').click(() => {
        displayPix.empty();
        const url = `https://api.flickr.com/services/feeds/photos_public.gne?
        tags=${$('#searchBox').val()}&
        format=json&
        jsoncallback=?`;
        jQuery.getJSON(url, (data) => {
            data.items.forEach(item => {
                displayPix.append(
                    `<div>
                    <h3>${item.title}</h3>
                    <img src=${item.media.m} alt=${item.title}>
                    </div>`
                );
            });
        } )
    })


}());