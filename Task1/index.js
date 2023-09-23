const submitButton = document.getElementById("submitButton");
const emailInput = document.getElementById("email");
const countryCodeInput = document.getElementById("countryCode");
const mobileNumberInput = document.getElementById("mobileNumber");
const errorContainer = document.createElement("div");
errorContainer.classList.add("errorMessage");
submitButton.addEventListener("click", function () {
  clearError();

  const email = emailInput.value;
  const countryCode = countryCodeInput.value;
  const mobileNumber = mobileNumberInput.value;

  const isEmailValid = isValidEmail(email);
  const isMobileValid = isValidMobileNumber(mobileNumber);

  if (isEmailValid && isMobileValid) {
    localStorage.setItem("email", email);
    localStorage.setItem("countryCode", countryCode);
    localStorage.setItem("mobileNumber", mobileNumber);
    window.location.href = "page2.html";
  } else {
    if (!isEmailValid) {
      displayError("You have entered an invalid Email Address");
    }
    if (!isMobileValid) {
      displayError("You have entered an invalid Mobile number");
    }
    if (!isEmailValid && !isMobileValid) {
      displayError(
        "You have entered an invalid Email Address and Mobile number"
      );
    }
  }
});

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

function isValidMobileNumber(mobileNumber) {
  const mobileRegex = /^\d{10}$/;
  return mobileRegex.test(mobileNumber);
}

function displayError(errorMessage) {
  errorContainer.textContent = errorMessage;
  submitButton.parentNode.insertBefore(
    errorContainer,
    submitButton.nextSibling
  );
}

function clearError() {
  if (errorContainer.parentNode === submitButton.parentNode) {
    submitButton.parentNode.removeChild(errorContainer);
  }
}
