function showOtherPhotos() {
    var mainTitle = document.getElementById('mainTitle');
    var otherPhotos = document.getElementById('otherPhotos');
    var topPhotosContainer = document.getElementById('topPhotos');
    var card1 = document.getElementById('card1');
    var heart = document.getElementById('heart');
    var card2 = document.getElementById('card2');

    var audioElement = document.getElementById('myAudio');

    document.body.classList.add('overlay-show');

    setTimeout(function() {
        otherPhotos.style.display = (otherPhotos.style.display === 'none' || otherPhotos.style.display === '') ? 'flex' : 'none';
        topPhotosContainer.style.display = (otherPhotos.style.display === 'flex') ? 'none' : 'flex';

        if (otherPhotos.style.display === 'flex') {
            topPhotosContainer.parentNode.insertBefore(otherPhotos, topPhotosContainer);
        } else {
            topPhotosContainer.parentNode.insertBefore(topPhotosContainer, card2.nextSibling);
        }

        [card1, heart, card2].forEach(function(element) {
            element.style.opacity = otherPhotos.style.display === 'flex' ? '0' : '1';
        });

        topPhotosContainer.style.opacity = otherPhotos.style.display === 'flex' ? '0' : '1';
        topPhotosContainer.style.transform = otherPhotos.style.display === 'flex' ? 'translateY(20px)' : 'translateY(0)';
        if (otherPhotos.style.display === 'flex') {
            audioElement.play();
        } else {
            audioElement.pause();
            audioElement.currentTime = 0;
        }
    }, 500);

    setTimeout(function() {
        document.body.classList.remove('overlay-show');
        mainTitle.textContent = "TE AMO"; 
    }, 500);
}
