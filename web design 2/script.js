document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('navbar-toggle');
    const navbarLinks = document.getElementById('navbar-links');
  
    toggleButton.addEventListener('click', () => {
     
      navbarLinks.classList.toggle('active');
      toggleButton.classList.toggle('active');
      
    });
  });