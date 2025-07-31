function getAcademicYearFromAge(age) {
  let year;

  switch (age) {
    case 5:
      year = "Year 1";
      break;
    case 6:
      year = "Year 2";
      break;
    case 7:
      year = "Year 3";
      break;
    case 8:
      year = "Year 4";
      break;
    case 9:
      year = "Year 5";
      break;
    case 10:
      year = "Year 6";
      break;
    case 11:
      year = "Year 7";
      break;
    case 12:
      year = "Year 8";
      break;
    case 13:
      year = "Year 9";
      break;
    case 14:
      year = "Year 10";
      break;
    case 15:
      year = "Year 11";
      break;
    case 16:
      year = "Year 12 (Sixth Form / College)";
      break;
    case 17:
      year = "Year 13 (Sixth Form / College)";
      break;
    case 18:
      year = "University - 1st Year (or gap year)";
      break;
    case 19:
      year = "University - 2nd Year";
      break;
    case 20:
      year = "University - 3rd Year";
      break;
    default:
      if (age < 5) {
        year = "Too young for Year 1";
      } else if (age > 20) {
        year = "Likely completed undergraduate or in further study";
      } else {
        year = "Invalid age";
      }
  }

  return year;
}

function showAcademicYear() {
  const ageInput = document.getElementById("ageInput").value;
  const age = parseInt(ageInput);

  if (isNaN(age)) {
    document.getElementById("result").textContent =
      "Please enter a valid number.";
    return;
  }

  const academicYear = getAcademicYearFromAge(age);
  document.getElementById("result").textContent = `Result: ${academicYear}`;
}
