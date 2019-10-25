(function(closeBtn, container, video, videoLink){
    videoLink.addEventListener('click', function (e) {
        e.preventDefault();
        container
            .style.display = 'flex';
        video.play();
        closeBtn.addEventListener('click', function () {
            video.pause();
            container
                .style.display = 'none';
            video.currentTime = 0;
        });
    });
})(
    document.querySelector('#kbg-mirror-close'),
    document.querySelector('.kbg-mirror'),
    document.querySelector('#kbg-mirror-video'),
    document.querySelector('.kbg-video-link')
);