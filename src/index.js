//Player video

const selecVideo = document.querySelector('video');

// Selected elements
const playButton = document.getElementById("play-btn");
const pauseButton = document.getElementById("pause-btn");
const mutedButton = document.getElementById("mute-btn");
const volumePlusButton = document.getElementById("vol-btn-plus");
const volumeLessButton = document.getElementById("vol-btn-less");


//Properties: play(), pause(), mute()
// Functions
//Play
const playVideo = () => {
    selecVideo.play();
}

//Pause
const pauseVideo = () => {
    selecVideo.pause();
    
}
//Mute
const muteVideo = () => {
    if(selecVideo.muted === false){
        selecVideo.muted = true;
    }
    else{
        selecVideo.muted = false;  
    } 
}
// Volume plus
const volumePlusVideo = () => {
    if (selecVideo.volume < 0.9) {
        selecVideo.volume = selecVideo.volume + 0.1;
    }
}
 //Volume less
 const volumeLessVideo = () => {
    if (selecVideo.volume > 0.1) {
        selecVideo.volume = selecVideo.volume - 0.1;
    }
 }


//Actions or events of DOM for videos
playButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);
mutedButton.addEventListener("click", muteVideo);
volumePlusButton.addEventListener("click", volumePlusVideo);
volumeLessButton.addEventListener("click", volumeLessVideo);
 

//selecVideo.play();
//selecVideo.pause();

