var currentIndex = 0; 
var slider = document.getElementById('slider');
var images = slider.getElementsByClassName('image');
var bottomImages = document.getElementById('btmImg').getElementsByTagName('img');


function showImage(index) {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = i === index ? 'block' : 'none';
    }
}

function next() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

for (let i = 0; i < bottomImages.length; i++) {
    bottomImages[i].addEventListener('click', function() {
        currentIndex = i;
        showImage(currentIndex );
    });
}
showImage(currentIndex);