// script.js
// Event Handling
const clickBtn = document.getElementById('clickBtn');
clickBtn.addEventListener('click', () => {
  alert('Button was clicked!');
});

const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseenter', () => {
  hoverBox.style.backgroundColor = 'orange';
});
hoverBox.addEventListener('mouseleave', () => {
  hoverBox.style.backgroundColor = 'lightblue';
});

const keypressInput = document.getElementById('keypressInput');
keypressInput.addEventListener('keypress', (e) => {
  console.log(`You pressed: ${e.key}`);
});

const secretBtn = document.getElementById('secretBtn');
secretBtn.addEventListener('dblclick', () => {
  alert('Double-click secret revealed!');
});

// Interactive Elements
const changeBtn = document.getElementById('changeBtn');
const colorBox = document.getElementById('colorBox');
changeBtn.addEventListener('click', () => {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  colorBox.style.backgroundColor = randomColor;
});

// Simple Image Gallery
const galleryImages = [
  'https://via.placeholder.com/300?text=1',
  'https://via.placeholder.com/300?text=2',
  'https://via.placeholder.com/300?text=3'
];
let currentImage = 0;
const galleryImg = document.getElementById('galleryImg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
  currentImage = (currentImage - 1 + galleryImages.length) % galleryImages.length;
  galleryImg.src = galleryImages[currentImage];
});
nextBtn.addEventListener('click', () => {
  currentImage = (currentImage + 1) % galleryImages.length;
  galleryImg.src = galleryImages[currentImage];
});

// Tabs
const tabBtns = document.querySelectorAll('.tabBtn');
const tabContents = document.querySelectorAll('.tabContent');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-tab');
    tabContents.forEach(tc => tc.classList.remove('active'));
    document.getElementById(`tab${target}`).classList.add('active');
  });
});

// Form Validation
const myForm = document.getElementById('myForm');
const feedback = document.getElementById('formFeedback');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!name || !email || !password) {
    feedback.textContent = 'Please fill in all fields.';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = 'Invalid email format.';
    return;
  }

  if (password.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters.';
    return;
  }

  feedback.style.color = 'green';
  feedback.textContent = 'Form submitted successfully!';
});

// Real-time feedback for password
const passwordField = document.getElementById('password');
passwordField.addEventListener('input', () => {
  feedback.style.color = passwordField.value.length >= 8 ? 'green' : 'red';
  feedback.textContent = passwordField.value.length >= 8 ? 'Strong password' : 'Password too short';
});
