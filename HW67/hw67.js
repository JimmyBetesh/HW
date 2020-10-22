(function () {
    'use strict';

    const videos = "hw67.json";
    const videoList = $("#videoList");
    fetch(videos)
        .then(r => {
            if (!r.ok) {
                throw new Error(`${r.status} ${r.statusText}`);
            }
            return r.json();
        })
        .then(json => {

            json.forEach(element => {
                const theImage = $(`<img src="${element.image}" title="${element.title}">`);
                videoList.append(theImage);
                theImage.click(() => {
                    $('video').attr('controls', true);
                    $('video').attr('src', element.videoUrl);
                    // $('video')[0].play();

                });
            });

        });
}());