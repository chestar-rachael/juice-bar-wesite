
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Form submission handling
        //document.getElementById('contactForm').addEventListener('submit', function (e) {
            //e.preventDefault();
            //alert('Thank you for your message! We will get back to you soon.');
            //this.reset();
        document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        var formData = new FormData(this);

        fetch('send_email.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            alert('Message sent successfully!');
            this.reset(); // Reset the form
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Message could not be sent.');
        
        });
        });



        // Scroll animation for product cards
        window.addEventListener('scroll', function () {
            const productCards = document.querySelectorAll('.product-card');
            productCards.forEach(card => {
                const cardPosition = card.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;

                if (cardPosition < screenPosition) {
                    card.style.opacity = '1';
                }
            });
        });

        // Initial animation trigger
        window.dispatchEvent(new Event('scroll'));
    