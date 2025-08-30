// Get references
const countryDropdown = document.getElementById("countryDropdown");
const result = document.getElementById("result");

// Add onchange event listener
countryDropdown.addEventListener("change", function () {
  const selectedCountry = countryDropdown.value;

  if (selectedCountry) {
    result.textContent = `You selected: ${selectedCountry}`;
    result.style.color = "green";
  } else {
    result.textContent = "You haven’t selected a country yet.";
    result.style.color = "#444";
  }
});
