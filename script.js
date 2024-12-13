// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.querySelector('.contact-button');
    const contactWrapper = document.querySelector('.contact-wrapper');
    const socialLinks = document.querySelectorAll('.social-link');

    contactButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default button behavior
        console.log('Contact button clicked'); // Debugging statement
        contactWrapper.classList.toggle('active');
        socialLinks.forEach(link => {
            link.style.opacity = contactWrapper.classList.contains('active') ? '1' : '0';
        });
    });

    const video = document.getElementById('work-item-video');
    const startTime = 0; // Start time in seconds
    const endTime = 6; // End time in seconds

    video.addEventListener('loadedmetadata', function() {
        video.currentTime = startTime;
    });

    video.addEventListener('timeupdate', function() {
        if (video.currentTime >= endTime) {
            video.currentTime = startTime; // Loop back to start time
            video.play();
        }
    });


    const video1 = document.getElementById('play-item-video');
    const startTime1 = 0; // Start time in seconds
    const endTime1 = -1; // End time in seconds

    video1.addEventListener('loadedmetadata', function() {
        video1.currentTime = startTime;
    });

    video1.addEventListener('timeupdate', function() {
        if (video1.currentTime >= endTime) {
            video1.currentTime = startTime; // Loop back to start time
            video1.play();
        }
    });

    

});

document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.back-to-top-button');

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});