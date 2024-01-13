
$(document).ready(function () {
    // ------------------------------forloader----------------

    function showLoader() {
        $(".spinner-wrapper").fadeIn();
    }
    // Function to hide the loader
    function hideLoader() {
        $(".spinner-wrapper").fadeOut();
    }
    // Simulate a delay to demonstrate the loader (remove this in your real implementation)
    function simulateContentLoading() {
        showLoader();
        setTimeout(function () {
            hideLoader();
        }, 0); // Replace 2000 with the time it takes to load your content (in milliseconds)
    }

    // Call simulateContentLoading() when the page is ready (remove this in your real implementation)
    $(document).ready(function () {
        simulateContentLoading();
    });

    //-----------------------------for spinner 
    document.addEventListener('DOMContentLoaded', function () {
        // Show the spinner while content is loading
        const spinner = document.getElementById('spinner');
        spinner.style.display = 'block';

        // Hide the spinner when the content is fully loaded
        window.addEventListener('load', function () {
            spinner.style.display = 'none';
        });
    });

    // -----------------------banner typing 
    var typed = new Typed(".typing", {
        strings: ["freelancer.", "frontend developer.", "web Designer."],
        typeSpeed: 60,
        backSpeed: 10,
        loop: true,
        backDelay: 2000
    });
});




