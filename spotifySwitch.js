'use strict';

var i = 0;
const songSwitcher = document.querySelector('.changeSongBtn');

songSwitcher.addEventListener('click', function() {
    var srcs = ["https://open.spotify.com/embed/track/3KENEwjmiRoWoW3HTE9JNb?utm_source=generator","https://open.spotify.com/embed/track/1NaDK3atogQEn9glK5fYuy?utm_source=generator"]
    
    document.getElementById("currentSong").src = srcs[i%2];
    i++;
    console.log('switched');
});










