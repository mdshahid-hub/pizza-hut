  // Mobile Menu Toggle Functionality
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

// Toggle the 'show' class on the nav list
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});



// Back to Top Button Functionality
const backToTopButton = document.getElementById('back-to-top');

// Show or Hide the Button on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll Back to the Top
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('close-btn');
    const backToTopButton = document.getElementById('back-to-top');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show the modal after 5 seconds
    setTimeout(() => {
        modal.style.display = 'block';
    }, 5000);

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Prevent form submission and close the modal
    document.getElementById('subscribe-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for subscribing!');
        modal.style.display = 'none';
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('close-btn');
    const backToTopButton = document.getElementById('back-to-top');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show the modal after 5 seconds
    setTimeout(() => {
        modal.style.display = 'block';
    }, 5000);

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Prevent form submission and close the modal
    document.getElementById('subscribe-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for subscribing!');
        modal.style.display = 'none';
    });

    // Carousel functionality
    function showSlide(index) {
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
        carouselItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    prev.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
        showSlide(currentIndex);
    });

    next.addEventListener('click', () => {
        currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    // Auto slide every 5 seconds
    setInterval(() => {
        next.click();
    }, 5000);

    // Form validation
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Thank you for contacting us!');
        contactForm.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});








// ...existing code...

// Mobile Menu Toggle Functionality
const menutoggle = document.getElementById('menu-toggle');
const navlist = document.getElementById('nav-list');

// Toggle the 'show' class on the nav list
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});

// ...existing code...