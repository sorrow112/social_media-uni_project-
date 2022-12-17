const images = [
  "url('images/slide1.png')",

  "url('images/slide2.png')",
  "url('images/slide3.png')",
];
index = 0;
function slideshow() {
  let header = document.getElementById("intro");

  header.style.backgroundImage = images[index];
  if (index == 4) {
    index = 0;
  }
  index = index + 1;
  setTimeout(slideshow, 5000);
}
