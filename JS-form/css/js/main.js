let form = document.getElementById("register-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let inputEmail = document.getElementById("inputEmail");
  let inputPassword = document.getElementById("inputPassword");
  let inputConfirmPassword = document.getElementById("inputConfirmPassword");
  let inputAddress = document.getElementById("inputAddress");
  let inputAddress2 = document.getElementById("inputAddress2");
  let inputCity = document.getElementById("inputCity");
  let inputZip = document.getElementById("inputZip");

  let errorMessages = "";
  if (inputEmail.value == "") {
    errorMessages += "Email is required <br>";
  }

  if (inputPassword.value == "") {
    errorMessages += "Password is required <br>";
  } else if (inputPassword.value.length < 6 || inputPassword.value.length > 9) {
    errorMessages += "Password must be between 6-9 chars <br>";
  }

  if (inputPassword.value != inputConfirmPassword.value) {
    errorMessages += "Confirm Password doesn't match <br>";
  }

  if (inputAddress.value == "") {
    errorMessages += "Address is required <br>";
  }
  if (inputAddress2.value == "") {
    errorMessages += "Second address is required <br>";
  }
  if (inputCity.value == "") {
    errorMessages += "City is required <br>";
  }
  if (inputZip.value == "") {
    errorMessages += "Zip code is required <br>";
  }

  let formMessages = document.getElementById("form-messages");
  if (errorMessages == "") {
    formMessages.innerHTML = `
            <div class="alert alert-success" role="alert">
                Du är registrerad!
            </div>
        `;
  } else {
    formMessages.innerHTML = `
            <div class="alert alert-danger" role="alert">
                ${errorMessages}
            </div>
        `;
  }
});

let selectBirthYear = document.getElementById("selectBirthYear");

let birthYearOptionsHTML = "";
for (let i = 2022; i >= 1922; i--) {
  if (i === 1990) {
    birthYearOptionsHTML += `<option selected>${i}</option>`;
  } else {
    birthYearOptionsHTML += `<option>${i}</option>`;
  }
}
