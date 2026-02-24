const bookingForm = document.getElementById('bookingForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobile');
const checkinInput = document.getElementById('checkin');
const checkoutInput = document.getElementById('checkout');
const guestsInput = document.getElementById('guests');
const roomSelect = document.getElementById('room');
const successMsg = document.getElementById('successMsg');
const today = new Date().toISOString().split('T')[0];
checkinInput.min = today;

checkinInput.addEventListener('change', function() {
    checkoutInput.min = this.value;
    if (checkoutInput.value && checkoutInput.value < this.value) {
        checkoutInput.value = '';
    }
});

bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => el.textContent = '');
    
    successMsg.textContent = '';
    successMsg.style.display = 'none';
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const mobile = mobileInput.value.trim();
    const checkin = checkinInput.value;
    const checkout = checkoutInput.value;
    const guests = parseInt(guestsInput.value);
    const room = roomSelect.value;
    
    let isValid = true;
    
    if (name === '' || !/^[A-Za-z\s]{2,}$/.test(name)) {
        document.getElementById('nameError').textContent = 'Enter valid name (letters only, min 2 chars)';
        isValid = false;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Enter valid email address';
        isValid = false;
    }
    
    if (!/^\d{10}$/.test(mobile)) {
        document.getElementById('mobileError').textContent = 'Mobile must be 10 digits';
        isValid = false;
    }
    
    if (checkin < today) {
        document.getElementById('checkinError').textContent = 'Check-in must be today or later';
        isValid = false;
    }
    
    if (checkout <= checkin) {
        document.getElementById('checkoutError').textContent = 'Check-out must be after check-in';
        isValid = false;
    }
    
    if (guests < 1 || guests > 6) {
        document.getElementById('guestsError').textContent = 'Guests must be 1-6';
        isValid = false;
    }
    
    if (room === '') {
        document.getElementById('roomError').textContent = 'Please select a room type';
        isValid = false;
    }
    
    if (isValid) {
        successMsg.textContent = `✅ Booking Successful! Confirmation sent to ${email}`;
        successMsg.style.display = 'block';
        
        setTimeout(() => {
            bookingForm.reset();
            successMsg.style.display = 'none';
            checkinInput.min = new Date().toISOString().split('T')[0];
        }, 3000);
    }
});