// Array to store form submissions
const formSubmissions = [];

// Get DOM elements
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const form = document.getElementById('contactForm');

// Open modal
openModalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
});

// Close modal
function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    form.reset();
}

closeModalBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Create form data object
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        age: document.getElementById('age').value,
        message: document.getElementById('message').value
    };

  // Store the form data in localStorage
  localStorage.setItem('formData', JSON.stringify(formData));

  // Redirect to display page
  window.location.href = 'display.html';
});