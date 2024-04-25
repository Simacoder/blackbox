var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Function to append the dynamically created HTML structure to the document
function appendToDocument() {
  // Get the head and body elements
  var head = document.head;
  var body = document.body;

  // Append head and body to the document
  document.documentElement.appendChild(head);
  document.documentElement.appendChild(body);
}

// Call the function to append the elements to the document
appendToDocument();
document.addEventListener("DOMContentLoaded", function () {
  // Get the footer links
  var link1 = document.querySelector(".icons li:nth-child(1) a");
  var link3 = document.querySelector(".icons li:nth-child(3) a");

  // Add event listener to link 1 to reload the page
  link1.addEventListener("click", function (event) {
    location.reload();
    event.preventDefault(); // Prevent the default link behavior
  });

  // Prevent the default link behavior for link 3
  link3.addEventListener("click", function (event) {
    event.preventDefault();
  });
});
