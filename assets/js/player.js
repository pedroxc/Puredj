// Radio Player Controls
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('radio-stream');
    const playBtn = document.getElementById('play-btn');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const volumeBtn = document.getElementById('volume-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeMuted = document.getElementById('volume-muted');
    const volumeOff = document.getElementById('volume-off');
    const volumeLow = document.getElementById('volume-low');
    const volumeHigh = document.getElementById('volume-high');
    
    pauseIcon.style.display = 'none';
    
    // Variable to store last volume before mute
    let lastVolume = 50;
    
    // Function to update volume icon
    function updateVolumeIcon() {
        const volume = audio.volume * 100;
        volumeMuted.style.display = 'none';
        volumeOff.style.display = 'none';
        volumeLow.style.display = 'none';
        volumeHigh.style.display = 'none';
        
        if (audio.muted || volume === 0) {
            volumeMuted.style.display = 'block';
        } else if (volume >= 1 && volume <= 33) {
            volumeOff.style.display = 'block';
        } else if (volume >= 34 && volume <= 66) {
            volumeLow.style.display = 'block';
        } else if (volume >= 67 && volume <= 100) {
            volumeHigh.style.display = 'block';
        }
    }
    
    // Set initial volume to 50%
    audio.volume = 0.5;
    updateVolumeIcon();

    audio.addEventListener('ended', function() {
        audio.load();
        if (!audio.paused) {
            audio.play();
        }
    });
    
    audio.addEventListener('error', function(e) {
        console.log('Stream error detected');
        console.log('Error details:', e);
        console.log('Audio error code:', audio.error ? audio.error.code : 'N/A');
        console.log('Audio error message:', audio.error ? audio.error.message : 'N/A');
    });
    
    // Volume slider
    volumeSlider.addEventListener('input', function() {
        audio.volume = this.value / 100;
        if (audio.volume > 0) {
            audio.muted = false;
            lastVolume = this.value;
        }
        updateVolumeIcon();
    });
    
    // Volume button (mute/unmute)
    volumeBtn.addEventListener('click', function() {
        if (audio.muted || audio.volume === 0) {
            // Unmute: restore last volume
            audio.muted = false;
            audio.volume = lastVolume / 100;
            volumeSlider.value = lastVolume;
        } else {
            // Mute: save current volume and set to 0
            lastVolume = volumeSlider.value;
            audio.muted = true;
            audio.volume = 0;
            volumeSlider.value = 0;
        }
        updateVolumeIcon();
    });
    
    // Play/Pause button
    playBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().then(() => {
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'block';
            }).catch(e => console.log('Play failed:', e));
        } else {
            audio.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    });
});
