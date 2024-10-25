const form = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');

        form.addEventListener('submit', function(e) {
            e.preventDefault();  

            
            setTimeout(function() {
                successMessage.style.display = 'block'; 
                form.reset();  
            }, 1000); 
        });