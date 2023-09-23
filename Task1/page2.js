const email = localStorage.getItem("email");
const countryCode = localStorage.getItem("countryCode");
const mobileNumber = localStorage.getItem("mobileNumber");

if (email && countryCode && mobileNumber) {
  document.getElementById("emailDisplay").textContent = email;
  document.getElementById(
    "contactDisplay"
  ).textContent = `${countryCode} - ${mobileNumber}`;
}
