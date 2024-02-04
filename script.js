document.addEventListener('DOMContentLoaded', function () {
    // Button Click Event Handling
    var links = document.querySelectorAll('.btn a');
    links.forEach(function (link) {
        link.addEventListener('click', function () {
            links.forEach(function (innerLink) {
                innerLink.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'), // Corrected selector to match the id
        smooth: true
    });

    // Image Link Click Event Handling
    var imageLinks = document.querySelectorAll('.imageLink');
    imageLinks.forEach(function (imageLink) {
        imageLink.addEventListener('click', function (event) {
            // Allow default behavior to open the link (new tab)
            var imgSrc = imageLink.querySelector('img').src;
            setTimeout(function () {
                window.open(imgSrc, '_blank');
            }, 100);
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Your existing code...

    // Image Link Click Event Handling
    var imageLinks = document.querySelectorAll('.image-link');
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modalImg');
    var closeBtn = document.getElementsByClassName('close')[0];

    imageLinks.forEach(function (imageLink) {
        imageLink.addEventListener('click', function () {
            var imgSrc = imageLink.dataset.src;
            modalImg.src = imgSrc;
            modal.style.display = 'block';
        });
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside the modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Add a function to close the modal
function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    const darkModeSwitch = document.getElementById("darkModeSwitch");
    const toggleMode = document.getElementById("toggle-mode");

    toggleMode.addEventListener("change", function () {
        if (toggleMode.checked) {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
        } else {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
        }
    });
});







const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.sec2'); // Use querySelectorAll
  hiddenElements.forEach((el) => observer.observe(el));
  
