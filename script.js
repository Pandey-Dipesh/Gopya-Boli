
// Smooth scrolling effect
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Form validation for story submission
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const textarea = document.querySelector("textarea");

    form.addEventListener("submit", function(e) {
        if (textarea.value.trim() === "") {
            e.preventDefault();
            alert("कृपया तपाईंको कथा लेख्नुहोस्!"); // "Please write your story!"
        }
    });
});

// Optional: Dark mode toggle (Uncomment if you want to add this feature)
// document.getElementById("darkModeToggle").addEventListener("click", function() {
//     document.body.classList.toggle("dark-mode");
// });
