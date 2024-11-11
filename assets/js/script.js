const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Apply saved theme on page load
const savedTheme = localStorage.getItem('theme') || 'light-mode';  // Default to light mode
body.classList.add(savedTheme);
themeToggleButton.innerHTML = savedTheme === 'dark-mode' ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';

// Toggle theme and save preference
themeToggleButton.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.replace('dark-mode', 'light-mode');
    themeToggleButton.innerHTML = '<i class="bi bi-moon-stars"></i>'; // Moon icon for dark mode
    localStorage.setItem('theme', 'light-mode');
  } else {
    body.classList.replace('light-mode', 'dark-mode');
    themeToggleButton.innerHTML = '<i class="bi bi-sun"></i>'; // Sun icon for light mode
    localStorage.setItem('theme', 'dark-mode');
  }
});
