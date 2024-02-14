function calculate_rr() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  // Input validation (optional, but recommended)
  if (weight <= 0 || height <= 0) {
    alert("Please enter valid weight and height values.");
    return;
  }

  const bmi = weight / (height / 100 * height / 100);
  const result = document.getElementById("result");

  // Interpret BMI results
  let interpretation;
  if (bmi < 18.5) {
    interpretation = "Underweight";
  } else if (bmi < 25) {
    interpretation = "Normal weight";
  } else if (bmi < 30) {
    interpretation = "Overweight";
  } else {
    interpretation = "Obese";
  }

  result.textContent = `Your BMI is ${bmi.toFixed(2)} (${interpretation}) with gender ${gender}`;
}