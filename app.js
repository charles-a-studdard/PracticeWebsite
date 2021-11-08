'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    document.body.classList.toggle('light-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);



});

const songSwitcher = document.querySelector('.changeSongBtn');

songSwitcher.addEventListener('click', function() {
    document.body.iframe.srcList.toggle('https://open.spotify.com/embed/track/3KENEwjmiRoWoW3HTE9JNb?utm_source=generator')
});




