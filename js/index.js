document.addEventListener("DOMContentLoaded", () => {
  const birthdateInput = document.getElementById("inputDate");
  const compareInput = document.getElementById("compareDate");
  const checkAgeBtn = document.querySelector("button");
  const outputSpan = document.getElementById("output");

  checkAgeBtn.addEventListener("click", () => {
    const birthDate = new Date(birthdateInput.value);
    let compareDate = compareInput.value
      ? new Date(compareInput.value)
      : new Date();

    if (isNaN(birthDate.getTime())) {
      alert("Please enter a valid birth date.");
      return;
    }

    let ageYears = compareDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = compareDate.getMonth() - birthDate.getMonth();

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    outputSpan.innerText = `You are ${ageYears} years old.`;
  });
});
