const charter = document.querySelector('.charter-input');
const colors = document.querySelectorAll('.text');
const chakBox = document.querySelector('.chak-box');
const chakImg = document.querySelector('.chek-img'); 

function generateStrongPassword() {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()_+-=[]{};:,.<>/?';
    const numbers = '0123456789';

    let password = '';

    password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));

    password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));

    password += symbols.charAt(Math.floor(Math.random() * symbols.length));

    password += numbers.charAt(Math.floor(Math.random() * numbers.length));

    while (password.length < 12) {
        const allChars = uppercaseLetters + lowercaseLetters + symbols + numbers;
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasSymbol = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
    const hasNumber = /\d/.test(password);
    const isStrong = hasUppercase && hasLowercase && hasSymbol && hasNumber;

    console.log(`Generated password: ${password} (${isStrong ? 'strong' : 'weak'})`);

    if (/[A-Z]/.test(charter.value) && /[a-z]/.test(charter.value) &&
    /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(charter.value) && /\d/.test(charter.value)) {
    
    document.querySelector('.level').value = 'STRONG';
    document.querySelector('.space-for-number').value = '10';

    // Set style properties for chak-box elements
    const chakBox = document.querySelectorAll('.chak-box');
    for (let i = 0; i < chakBox.length; i++) {
        chakBox[i].style.backgroundColor = 'green';
    }

    // Set style properties for chak-img elements
    const chakImg = document.querySelectorAll('.chek-img');
    for (let i = 0; i < chakImg.length; i++) {
        chakImg[i].style.display = 'flex';
    }

    const text = document.querySelectorAll('.text');
    for (let i = 0; i < chakImg.length; i++) {
        text[i].style.background = 'green';
    }

    const progress = document.querySelector('.progress-bar');
    for (let i = 0; i < chakImg.length; i++) {
        progress.style.background = 'green';
        progress.style.width = '311px';
    }
}

else if (hasUppercase && hasLowercase && hasNumber) {
    document.querySelector('.level').value = 'MEDIUM'
    document.querySelector('.space-for-number').value = '7'
   
    const chakBox = document.querySelectorAll('.chak-box');
    for (let i = 0; i < chakBox.length - 2; i++) {
        chakBox[i].style.backgroundColor = 'green';
    }

    // Set style properties for chak-img elements
    const chakImg = document.querySelectorAll('.chek-img');
    for (let i = 0; i < chakImg.length -2; i++) {
        chakImg[i].style.display = 'flex';
    }

    const text = document.querySelectorAll('.text');
    for (let i = 0; i < chakImg.length -2; i++) {
        text[i].style.background = 'orange';
    }

    const progress = document.querySelector('.progress-bar');
    for (let i = 0; i < chakImg.length; i++) {
        progress.style.background = 'green';
        progress.style.width = '220px';
    }

}
else if (hasUppercase && hasLowercase) {
    document.querySelector('.level').value = 'WEAK'
    document.querySelector('.space-for-number').value = '3'
    const chakBox = document.querySelectorAll('.chak-box');
    for (let i = 0; i < chakBox.length -3; i++) {
        chakBox[i].style.backgroundColor = 'green';
    }

    const chakImg = document.querySelectorAll('.chek-img');
    for (let i = 0; i < chakImg.length -3; i++) {
        chakImg[i].style.display = 'flex';
    }

    const text = document.querySelectorAll('.text');
    for (let i = 0; i < chakImg.length -3; i++) {
        text[i].style.background = 'yellow';
    }

    const progress = document.querySelector('.progress-bar');
    for (let i = 0; i < chakImg.length; i++) {
        progress.style.background = 'green';
        progress.style.width = '140px';
    }

   

    }

}

document.getElementById("clear-button").addEventListener("click", function() {
    location.reload();
    document.querySelector('.space-for-number').value = ' '
    document.querySelector('.level').value = ' '
});


