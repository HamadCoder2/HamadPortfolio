
//---------------------------dark and light mode ----------------
$(document).ready(function () {
  var isDarkMode = localStorage.getItem('darkMode') === 'true';
  // Function to apply the selected mode (light/dark)
  function applyMode(isDark) {
    // Toggle the visibility of the buttons
    $('#lightButton').toggle(!isDark);
    $('#darkButton').toggle(isDark);

    // Toggle the dark mode CSS file
    $('#darkModeStyles').prop('disabled', !isDark);

    // Save the user's preference in local storage
    localStorage.setItem('darkMode', isDark);
  }

  // Initial mode application based on the user's preference
  applyMode(isDarkMode);

  // Light mode button click event handler
  $('#lightButton').click(function () {
    applyMode(true);
  });

  // Dark mode button click event handler
  $('#darkButton').click(function () {
    applyMode(false);
  });




  $('.slick-slider').slick({
    // dots: false,
    // arrows: false,
    // infinite: true,
    // autoplay: true,
    // slidesToShow: 9,
    // slidesToScroll: 1,
    // autoplaySpeed: 3000, 
    // pauseOnHover: false,
    // arrows: false,
    // speed: 2000,
    // cssEase: 'linear',
    infinite: true,
    autoplay: true,
    slidesToShow: 9,
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplaySpeed: 500, // Set the interval in milliseconds (3 seconds in this example)
    pauseOnHover: false,
    arrows: false,
    speed: 3000,
    cssEase: 'linear',
    // rtl: true
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 9,
          speed: 2000,
        }
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        }
      }]

  });


});


// --------------------------------portfolio section-------------------- 
// Function to show/hide sections based on the selected option with animation
function showSelectedSection() {
  const selectedSectionId = $('#sectionSelector').val();
  const selectedSection = $('#' + selectedSectionId);

  // Hide all sections with animation
  $('.section.show').removeClass('show');

  // Show the selected section with animation
  selectedSection.addClass('show');
}

// Add a change event listener to the select tag
$('#sectionSelector').on('change', showSelectedSection);

// Call the function to show the initial section with animation
showSelectedSection();



//for email
document.addEventListener('DOMContentLoaded', function () {
  const successmessage = document.getElementById('success-box');
  if (successmessage) {
    successmessage.style.display = 'block';
    setTimeout(function () {
      successmessage.style.display = 'none';
    }, 5000); // Hide the message after 5 seconds (adjust as needed)
  }
});


// for projects section 
document.addEventListener('DOMContentLoaded', function () {
  const successMessage = document.getElementById('Success-box');
  if (successMessage) {
    successMessage.style.display = 'block';
    setTimeout(function () {
      successMessage.style.display = 'none';
    }, 5000); // Hide the message after 5 seconds (adjust as needed)
  }
});

// for email and phone number
document.getElementById('contactInfo').addEventListener('blur', function () {
  const inputValue = this.value.trim();
  if (inputValue.match(/^\d{10}$/)) { // Check if it's a 10-digit number
    this.value = formatPhoneNumber(inputValue);
  } else if (isValidEmail(inputValue)) {
    // It's a valid email
  } else {
    // Invalid input, clear the field or show an error message
    this.value = '';
    alert('Invalid input. Please enter a valid email or phone number.');
  }
});

function isValidEmail(email) {
  // Add your email validation logic here
  // This is a basic example; you can use regex or other validation techniques
  return email.includes('@');
}

function formatPhoneNumber(phone) {
  // Add your phone number formatting logic here
  // This is a basic example; you can format it as needed
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}


// for form section 
document.querySelector('form').addEventListener('submit', function (event) {
  if (!event.target.checkValidity()) {
    event.preventDefault(); // Prevent the form from submitting
    alert("Please fill out all required fields.");
  }
});




// -------------------------skill bar
// let skilsContent = select('.skills-content');
// if (skilsContent) {
//   new Waypoint({
//     element: skilsContent,
//     offset: '80%',
//     handler: function (direction) {
//       let progress = select('.progress .progress-bar', true);
//       progress.forEach((el) => {
//         el.style.width = el.getAttribute('aria-valuenow') + '%'
//       });
//     }
//   })
// }

// Change select to querySelectorAll
let progress = document.querySelectorAll('.progress .progress-bar');

if (progress.length > 0) {
  new Waypoint({
    element: skillsContent,
    offset: '80%',
    handler: function (direction) {
      // Use forEach on NodeList
      progress.forEach((el) => {
        el.style.width = el.getAttribute('aria-valuenow') + '%';
      });
    }
  });
}



const image = document.getElementById('scrollTarget');

image.addEventListener('mouseenter', () => {
  // Scroll the element into view
  image.scrollIntoView({ behavior: 'smooth' });
});




// loader 
