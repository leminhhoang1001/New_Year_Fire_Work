const musicOn = '<svg fill="white" width="24" height="24"><use href="#icon-music-on" xlink:href="#icon-music-on"></use></svg>';
const musicOff = '<svg fill="white" width="24" height="24"><use href="#icon-music-off" xlink:href="#icon-music-off"></use></svg>';
const music_btn = document.getElementById('music_btn');


const muteSound = new Howl({
    src: ['./audio/Happy-New-Year.mp3'],
    // mute: false,
    // autoplay:true,
    loop: true,
    html5: true,
    volume: 1
});
muteSound.autoUnlock = false;

// play music once first time
music_btn.addEventListener('click', playHNY, { once: true });

function playHNY() {
    muteSound.play();
    music_btn.innerHTML = musicOn;
}

// mute/unmute
music_btn.addEventListener("click", () => {
    // if the audio is muted, set the btn.innerHTML to unmuteIcon
    // otherwise, set it to the muteIcon
    if (muteSound.muted) {
        music_btn.innerHTML = musicOn;
        muteSound.mute(false);
    } else {
        music_btn.innerHTML = musicOff;
        muteSound.mute(true);
    }
    // toggle the muted property of the audio element
    muteSound.muted = !muteSound.muted;
});