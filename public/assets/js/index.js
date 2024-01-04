

//---------------------------dark and light mode ----------------
$(document).ready(function () {
    var isDarkMode = localStorage.getItem('darkMode') === 'true';
    // Function to apply the selected mode (light/dark)
    function applyMode(isDark) {
        // Toggle the visibility of the buttons
        $('#lightModeButton').toggle(!isDark);
        $('#darkModeButton').toggle(isDark);

        // Toggle the dark mode CSS file
        $('#darkModeStyles').prop('disabled', !isDark);

        // Save the user's preference in local storage
        localStorage.setItem('darkMode', isDark);
    }

    // Initial mode application based on the user's preference
    applyMode(isDarkMode);

    // Light mode button click event handler
    $('#lightModeButton').click(function () {
        applyMode(true);
    });

    // Dark mode button click event handler
    $('#darkModeButton').click(function () {
        applyMode(false);
    });



    // ------------------------------forloader

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



    // ---------------------------------sticky scroll 
    $(window).scroll(function () {

        if (this.scrollY > 100) {
            $('header').addClass("sticky");
        } else {
            $('header').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });



    // ---------------------------scroll up nutton 
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });

        $('html').css("scrollBehavior", "auto");
    });

    $('header .menu li a').click(function () {

        $('html').css("scrollBehavior", "smooth");
    });


    //----------------------------------mobile nav bar----------
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });




    // -----------------------banner typing 
    var typed = new Typed(".typing", {
        strings: ["freelancer.", "frontend developer.", "web Designer."],
        typeSpeed: 60,
        backSpeed: 10,
        loop: true,
        backDelay: 2000
    });

    // var typed = new Typed(".typing", {
    //     strings: ["freelancer.", "frontend developer.", "web Designer."],
    //     typeSpeed: 60,
    //     backSpeed: 10,
    //     loop: true,
    //     backDelay: 2000,
    //     showCursor: false, // Hide the cursor
    //     preStringTyped: function (pos, self) {
    //         // Add a space before each string to create separation
    //         if (pos !== 0) {
    //             self.el.innerHTML += " ";
    //         }
    //     },
    //     onStart: function () {
    //         // Add space before the first string initially
    //         document.querySelector(".typing").innerHTML = " " + typed.strings[0];
    //     }
    // });


    //-------------------social links typing 
    var typed = new Typed(".typing-2", {
        strings: ["#Facebook", "#Instagram", "#Linkedin", "#youtube", "#Github"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        backDelay: 2000
    });





    //------------------work data counting 
    $('.num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 10000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


    $('.slick-slider').slick({

        infinite: true,
        autoplay: true,
        slidesToShow: 9,
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplaySpeed: 1000, // Set the interval in milliseconds (3 seconds in this example)
        pauseOnHover: false,
        arrows: false,
        speed: 2000,
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




    // ------------------------------forloader

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
        }, 800); // Replace 2000 with the time it takes to load your content (in milliseconds)
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



});




