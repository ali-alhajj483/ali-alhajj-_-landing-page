// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('active');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Form Validation
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const formMessage = document.getElementById("form-message");

  if (!name.value || !email.value || !message.value) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill out all fields.";
    return;
  }

  formMessage.style.color = "green";
  formMessage.textContent = "Message sent successfully!";
  this.reset();
});
