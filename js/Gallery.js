// WEB ANIMATIONS API //
// A rudimentary way to make the website responsive, uses zoom to //
// fit the entirety of the website on a specific resolution. //
// The resolutions include 1920 (Desktop), 1440 (Laptop), and //
// 375 (Phone). //

const body = document.querySelector("body");

body.style.zoom = 0.991;

window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth;

  if (windowWidth < 375) {
    body.style.zoom = 0.565;
  } else if (windowWidth < 1440) {
    body.style.zoom = 0.740;
  } else {
    body.style.zoom = 0.991;
  }

});

//----------------------------------------------------------------------//

// Fullscreen API //
// Allows the user to click on an image that doesn't contain the //
// "data-fullscreen="false" attribute and fits the image //
// to the borders of the user's screen. //

const images = document.querySelectorAll('img');

for (let i = 0; i < images.length; i++) {
  const image = images[i];
  if (image.dataset.fullscreen !== 'false') {
    image.addEventListener('click', function() {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        image.requestFullscreen();
      }
    });
  }
}

document.addEventListener('fullscreenchange', function() {
  if (!document.fullscreenElement) {
  }
});

//----------------------------------------------------------------------//

// Intersection Oberserver API //
// This lets the website lazy load all the images, improving //
// performance of the website. The images will only load when //
// they are viewed, and will stay loaded after. //

const image = document.querySelectorAll('img');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const src = img.getAttribute('data-src');
      img.setAttribute('src', src);
      observer.unobserve(img);
    }
  });
});

image.forEach((image) => {
  observer.observe(image);
});