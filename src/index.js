//Player video

const selecVideo = document.querySelector('video');

// Selected elements
const playButton = document.getElementById("play-btn");
const pauseButton = document.getElementById("pause-btn");
const mutedButton = document.getElementById("mute-btn");
const volumeButton = document.getElementById("volume-btn");

//Properties: play(), pause(), mute()
// Functions
const playVideo = () => {
    selecVideo.play();
}

const pauseVideo = () => {
    selecVideo.pause();
}

const muteVideo = () => {
    if(selecVideo.muted === false){
        selecVideo.muted = true;
    }
    else{
        selecVideo.muted = false;  
    }    
}

const volumeVideo = () => {
    selecVideo.volume = 0.2;
    if (selecVideo.volume < 1 && selecVideo.volume > 0) {
        selecVideo.volume = selecVideo.volume - 0.2;
    }
}

//Actions or events of DOM for videos
playButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);
mutedButton.addEventListener("click", muteVideo);
volumeButton.addEventListener("click", volumeVideo);

//selecVideo.play();
//selecVideo.pause();

