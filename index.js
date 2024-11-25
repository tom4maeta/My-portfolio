window.alert("Welcome To my Portofolio Site!")

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 60, 
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});
function welcomeMessage() {
    
    const userResponse = window.confirm(
      "Welcome to my portfolio! Click the OK button below to be directed to the homepage."
    );

    
    if (userResponse) {
      window.location.href = "homepage.html"; 
    }
  };

  function welcomeMessage() {
   
    const userResponse = window.confirm(
      "Hello! Thank you for visiting. Click OK to explore my homepage or Cancel to stay here."
    );

    
    if (userResponse) {
      window.location.href = "Tpmport.html"; 
    }
  }