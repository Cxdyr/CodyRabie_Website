document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-about-me');
    const aboutMeSection = document.getElementById('about-me-section');

    toggleButton.addEventListener('click', function() {
        if (aboutMeSection.style.display === 'none' || aboutMeSection.style.display === '') {
            aboutMeSection.style.display = 'block';
        } else {
            aboutMeSection.style.display = 'none';
        }
    });
});
