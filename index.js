var slideIndex = 1;
function updateDarkMode() {
  // Get the checkbox element
  const checkbox = document.getElementById("switch_dark");

  // Check if the checkbox is checked
  const isChecked = checkbox.checked;

  // Toggle the dark-mode class on the body element based on the checked state
  const body = document.body;
  body.classList.toggle("dark-mode", isChecked);

  // Optionally, add visual feedback to the checkbox label (e.g., changing background color)
  const label = checkbox.closest(".switch");
  if (label) {
    label.classList.toggle("checked", isChecked); // Add your preferred class for styling
  }
}

function OpenDropdown(val_id) {
  document.getElementById(val_id).classList.toggle("show");
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

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
showSlides(slideIndex);
// Close the dropdown if the user clicks outside of it

const numberInput = document.getElementById('numberInput');
function controlNumber(n){
  
  if (n < 1) {
    numberInput.value = Math.max(parseInt(numberInput.value) - 1, 1);
  } else {
    numberInput.value = Math.min(parseInt(numberInput.value) + 1, 10);
  }
  updateTotalPrice();
}


function updateTotalPrice() {
  const totalPrice = document.getElementById('total-price');

  const quantity = parseInt(numberInput.value);
  const price = 300;
  totalPrice.textContent = (quantity * price).toString();
}
// Add an event listener to the checkbox to activate the function on change
document
  .getElementById("switch_dark")
  .addEventListener("change", updateDarkMode);

// Optionally, call the function initially to set the dark mode based on the checkbox's initial state
window.addEventListener("DOMContentLoaded", updateDarkMode);

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
