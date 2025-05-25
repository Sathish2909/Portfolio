document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'



        
        });
        if (this.getAttribute('href') === '#contact') {
            target.style.animation = 'none';
            target.offsetHeight; // force reflow
            target.style.animation = 'fadeInUp 1s ease forwards';
        }
    });
});

document.getElementById('connectBtn').addEventListener('click', function () {
    const contactSection = document.getElementById('contact');
    
    // Scroll to contact section
    contactSection.scrollIntoView({ behavior: 'smooth' });

    // Add bounce animation to the form
    const form = contactSection.querySelector('.contact-form');
    form.classList.add('bounce');

    // Optional: Toast message
    showToast("Let's talk! 🚀");

    // Remove the animation class after it finishes to allow re-triggering
    setTimeout(() => {
        form.classList.remove('bounce');
    }, 1000);
});

// Toast function
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 500);
    }, 3000);
}

function scrollToFooter() {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
}




const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-link');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


window.addEventListener('scroll',()=>{
    const navbar=document.querySelector('.navbar');
    window.scrollY>50?
    navbar.computedStyleMap.backgroundColor='rgba(10,10,10,0.98)':navbar.computedStyleMap.backgroundColor='rgba(10,10,10,0.95)';
});

