'use strict';

const srcList = [
    "https://i.imgur.com/A9G5UDL.jpg",
    "https://i.imgur.com/GPRSJ99.jpg",
    "https://i.imgur.com/IpTqugw.jpg",
    "https://i.imgur.com/5z26gFC.jpg",
    "https://i.imgur.com/CIhC3qS.jpg",
    "https://i.imgur.com/E3U6ziG.jpg",
    "https://i.imgur.com/CtVx41p.jpg",
    "https://i.imgur.com/91HVY53.jpg",
    "https://i.imgur.com/NZKWLm3.jpg",
    "https://i.imgur.com/4115Dlp.jpg",
    "https://i.imgur.com/xgfTYLD.png",
    "https://i.imgur.com/3SHBLbD.png",
    "https://i.imgur.com/SZu3xJR.png",
    "https://i.imgur.com/pS3bnbI.png",
    "https://i.imgur.com/HkmLxKH.png",
    "https://i.imgur.com/FfIws9l.png" 
];

function change() {
    const images = document.getElementsByTagName('img'); 

    for(var i = 0; i < images.length; i++) {
        var image = srcList[Math.floor(Math.random()*srcList.length)];
        images[i].src = image;
    }    
}

setInterval(() => {
    change();
}, 2000)
