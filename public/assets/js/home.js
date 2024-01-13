
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
});

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
