// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Scroll to top when the page is refreshed
window.addEventListener('load', function() {
    scrollToTop();
});


document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.containerproduk1 img');

    function checkPosition() {
        const windowHeight = window.innerHeight;
        images.forEach(img => {
            const posFromTop = img.getBoundingClientRect().top;
            if (posFromTop - windowHeight <= 0) {
                img.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);
    checkPosition(); // Cek posisi saat halaman pertama kali dimuat
});

document.getElementById("scrollToTopButton").addEventListener("click", function() {
    let scrollTopPosition;
    
    // Check screen width to adjust scroll position
    if (window.innerWidth <= 768) {
        // For mobile devices
        scrollTopPosition = 200; // Adjust this value as needed
    } else {
        // For larger screens
        scrollTopPosition = 635;
    }
    
    window.scrollTo({
        top: scrollTopPosition,
        behavior: "smooth"
    });
});

document.getElementById("contactus").addEventListener("click", function() {
    let scrollTopPosition;
    
    // Check screen width to adjust scroll position
    if (window.innerWidth <= 768) {
        // For mobile devices
        scrollTopPosition = 6290 // Adjust this value as needed
    } else {
        // For larger screens
        scrollTopPosition = 5150;
    }
    
    window.scrollTo({
        top: scrollTopPosition,
        behavior: "smooth"
    });
});

document.getElementById("catalog").addEventListener("click", function() {
    let scrollTopPosition;
    
    // Check screen width to adjust scroll position
    if (window.innerWidth <= 768) {
        // For mobile devices
        scrollTopPosition = 2000; // Adjust this value as needed
    } else {
        // For larger screens
        scrollTopPosition = 1900;
    }
    
    window.scrollTo({
        top: scrollTopPosition,
        behavior: "smooth"
    });
});

document.getElementById("orderpage").addEventListener("click", function() {
    let scrollToPosition;
    
    // Check screen width to adjust scroll position
    if (window.innerWidth <= 768) {
        // For mobile devices
        scrollToPosition = 5700; // Adjust this value as needed
    } else {
        // For larger screens
        scrollToPosition = 4560;
    }
    
    window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth"
    });
});

document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth > 768) {
        var typed = new Typed('.typed-text2', {
            strings: [
                "Welcome to La Vaguelette, where every bite is a wave of delight! Our cookies are crafted with love and the finest ingredients, creating a symphony of flavors that dance on your palate.<br><br>From classic chocolate chip to innovative seasonal creations, we offer a diverse selection that caters to all tastes.<br><br>At La Vaguelette, we believe in the magic of baking. Each cookie is a testament to our passion for quality and our dedication to bringing joy through every crumb."
            ],
            typeSpeed: 20,
            backSpeed: 15,
            startDelay: 500,
            backDelay: 2000,
            loop: false,
            contentType: 'html'  // this ensures that HTML tags are processed correctly
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    
    let options = {
        threshold: 0.1
    };

    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, options);

    document.querySelectorAll('.animate').forEach(element => {
        observer.observe(element);
    });
});

let currentIndex = 0;
const photos = document.querySelectorAll('.photo');
const totalPhotos = photos.length;

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalPhotos - 1;
    updatePhotoDisplay();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex < totalPhotos - 1) ? currentIndex + 1 : 0;
    updatePhotoDisplay();
});

function updatePhotoDisplay() {
    const photoWidth = photos[0].clientWidth;
    const newTransformValue = -currentIndex * photoWidth;
    document.querySelector('.photos').style.transform = `translateX(${newTransformValue}px)`;
}
