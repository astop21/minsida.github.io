let music_audio = new Audio("assets/snd/safet.mp3");

function play_or_pause() { 
    if(music_audio.paused){
        music_audio.play(); 
    }
    else{
        music_audio.pause(); 
    }
} 

const red_square = document.getElementById("animate");
red_square.addEventListener("click", play_or_pause, false);

