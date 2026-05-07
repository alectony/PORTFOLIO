(function() {
    emailjs.init("jeHW_R25bj1D7ye3X"); 
})();

window.onload = function() {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.querySelector('.contact-form .btn');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
            submitBtn.style.opacity = '0.7';
            submitBtn.style.pointerEvents = 'none';
            emailjs.sendForm('service_x1akg2n', 'template_4lqaf7f', this)
                .then(() => {
                    submitBtn.innerHTML = 'Sent Successfully! <i class="fa-solid fa-check"></i>';
                    submitBtn.style.background = '#10b981'; 
                    submitBtn.style.opacity = '1';
                    this.reset(); 
                }, (error) => {
                    console.log('FAILED...', error);
                    submitBtn.innerHTML = 'Error! Try Again';
                    submitBtn.style.background = '#ef4444';
                    submitBtn.style.opacity = '1';
                    submitBtn.style.pointerEvents = 'all';
                });
        });
    }
};