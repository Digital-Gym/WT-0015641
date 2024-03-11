document.addEventListener("DOMContentLoaded", function () {
    const playMusicBtn = document.getElementById("playMusicBtn");
    let isPlaying = false; 

    playMusicBtn.addEventListener("click", function () {
        // check if plays 
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
        } else {
            audio.play();
            isPlaying = true;
        }
    });

    // register audio
    const audio = new Audio('sound/music.mp3'); 
    audio.volume = 0.3; // i will save your ears don't worry

    // in case the person really loves uzbek folk
    audio.addEventListener("ended", function () {
        isPlaying = false;
    });
});