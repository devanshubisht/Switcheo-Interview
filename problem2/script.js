const form = document.getElementById('form');
const address = document.getElementById('input-address');
const amount = document.getElementById('input-amount');
const number = document.getElementById('input-number');
const OTP = document.getElementById('input-otp');

form.addEventListener('submit', (e) => {
     e.preventDefault();
     checkInputs();
 });


function checkInputs() {
    const addressValue = address.value.trim();
    const amountValue = amount.value.trim()
    const numberValue = number.value.trim(); 
    const OTPValue = OTP.value.trim();

    if (addressValue === '' || addressValue == null ) {
        setErrorFor(address, 'Invalid Address');
    } else {
        setSuccessFor(address)
    }

    if (amountValue === '' || amountValue == null ) {
        setErrorFor(amount, 'Amount is empty');
    } else {
        setSuccessFor(amount)
    }

    if (numberValue === '' || numberValue == null ) {
        setErrorFor(number, 'Number is empty');
    } else {
        setSuccessFor(number)
    }

    if (OTPValue === '' || OTPValue == null ) {
        if (numberValue === '' || numberValue == null ) {
            setErrorFor(OTP, 'Verify your number!');
        } else {
            otpError(OTP, 'Submit your OTP sent to your number!')
        }
    } else {
        setSuccessFor(OTP)
    }
    e.preventDefault();
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function otpError(OTP, message) {
    const formControl = OTP.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}
