const form = document.getElementById('creditCardForm');
const cardName = document.getElementById('cardName');
const cardNumber = document.getElementById('cardNumber');
const expiryMonth = document.getElementById('expiryMonth');
const expiryYear = document.getElementById('expiryYear');
const cvv = document.getElementById('cvv');
const successMsg = document.getElementById('successMsg');

for (let i = 1; i <= 12; i++) {
    const month = i.toString().padStart(2, '0');
    const option = document.createElement('option');
    option.value = month;
    option.textContent = month;
    expiryMonth.appendChild(option);
}

const currentYear = new Date().getFullYear();
for (let i = 0; i <= 10; i++) {
    const year = currentYear + i;
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    expiryYear.appendChild(option);
}

cardNumber.addEventListener('input', function() {
    let value = this.value.replace(/\s/g, '').replace(/\D/g, '');
    let formatted = '';
    
    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formatted += ' ';
        }
        formatted += value[i];
    }
    
    this.value = formatted.substring(0, 19);
});

cvv.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '').substring(0, 3);
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
    
    let isValid = true;
    
    if (!/^[A-Za-z\s]{3,}$/.test(cardName.value.trim())) {
        document.getElementById('nameError').textContent = 'Enter valid name (letters only, min 3 chars)';
        isValid = false;
    }
    
    const cardNum = cardNumber.value.replace(/\s/g, '');
    if (!/^[456]\d{15}$/.test(cardNum)) {
        document.getElementById('numberError').textContent = 'Card must start with 4,5,6 and have 16 digits';
        isValid = false;
    }
    
    if (!/^\d{3}$/.test(cvv.value)) {
        document.getElementById('cvvError').textContent = 'CVV must be 3 digits';
        isValid = false;
    }
    
    const month = expiryMonth.value;
    const year = expiryYear.value;
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    
    if (!month || !year) {
        document.getElementById('expiryError').textContent = 'Select expiry month and year';
        isValid = false;
    } else if (parseInt(year) < currentYear || 
               (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
        document.getElementById('expiryError').textContent = 'Card has expired';
        isValid = false;
    }
    
    if (isValid) {
        successMsg.textContent = '✅ Payment Successful! Your card has been validated.';
        successMsg.style.display = 'block';
        
        setTimeout(() => {
            form.reset();
            successMsg.style.display = 'none';
        }, 3000);
    }
});