let fname = document.getElementById('fname');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let btnSubmit = document.querySelector('.form button')
let nameResult = document.querySelector('.nameResult');
let mailResult = document.querySelector('.mailResult');
let phoneResult = document.querySelector('.phoneResult');

email.onchange = function (e) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (e.target.value.match(mailformat))
    document.querySelector('.form .errmail').classList.replace('show', 'hidden');
  else {
    document.querySelector('.form .errmail').classList.replace('hidden', 'show');
    email.focus();
  }
}

phone.onchange = function (e) {
  var phoneformat = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
  if (e.target.value.match(phoneformat))
    document.querySelector('.form .errphone').classList.replace('show', 'hidden');
  else {
    document.querySelector('.form .errphone').classList.replace('hidden', 'show');
    phone.focus();
  }
}

btnSubmit.addEventListener('click', submit)
function submit() {
  nameResult.classList.replace('hidden', 'show');
  mailResult.classList.replace('hidden', 'show');
  phoneResult.classList.replace('hidden', 'show');
  if (fname.value.length == 0 || fname.value.length > 20) {
    document.querySelector('.form .errname').classList.replace('hidden', 'show');
    fname.focus();
  }
  else {
    nameResult.innerText = 'Name: ' + fname.value;
    document.querySelector('.form .errname').classList.replace('show', 'hidden');
  }
  if (email.value.length != 0) {
    mailResult.innerText = 'Email: ' + email.value;
  }
  if (phone.value.length != 0) {
    phoneResult.innerText = 'Phone: ' + phone.value;
  }
}