// Scroll To Top
// const toTop = () => window.scrollTo({top : 0, behavior: 'smooth'});

const preloader = document.querySelector('.preloader');
// Preloader
window.addEventListener('load', function () {
  // Set a timeout to simulate the content loading delay (remove this line in actual implementation)
  setTimeout(function () {
    // Add 'loaded' class to the body to hide the preloader when content is loaded
    preloader.classList.add('preloader-loaded');
  }, 400); // Change the timeout value to match your actual content load time
});
