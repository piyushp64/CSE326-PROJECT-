document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    document.getElementById('successModal').style.display = 'flex';
});

function closeModal() {
    
    document.getElementById('successModal').style.display = 'none';
}