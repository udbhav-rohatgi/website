// script.js

const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check if user has a saved preference
const savedTheme = localStorage.getItem('theme');

// Apply saved theme if available
if (savedTheme) {
  body.classList.add(savedTheme);
  if (savedTheme === 'dark-mode') {
    themeToggleButton.innerHTML = '<i class="bi bi-sun"></i>';  // Sun icon for light mode
  }
}

// Toggle theme when button is clicked
themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Update icon based on the current theme
  if (body.classList.contains('dark-mode')) {
    themeToggleButton.innerHTML = '<i class="bi bi-sun"></i>';  // Sun icon for light mode
    localStorage.setItem('theme', 'dark-mode');  // Save user's choice to localStorage
  } else {
    themeToggleButton.innerHTML = '<i class="bi bi-moon-stars"></i>';  // Moon icon for dark mode
    localStorage.setItem('theme', '');  // Clear saved theme
  }
});

// Check for system preference if no user preference is saved
if (!savedTheme) {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDarkScheme) {
    body.classList.add('dark-mode');
    themeToggleButton.innerHTML = '<i class="bi bi-sun"></i>';  // Sun icon for light mode
  } else {
    themeToggleButton.innerHTML = '<i class="bi bi-moon-stars"></i>';  // Moon icon for dark mode
  }
}
