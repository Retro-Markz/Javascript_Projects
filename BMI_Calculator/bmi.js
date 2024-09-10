const btnEl = document.getElementById("btn");
const bmiInput = document.getElementById("bmi-result");
const weightCondition = document.getElementById("condition");

function calculateBmi() {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;

  const bmiValue = weightValue / (heightValue * heightValue);

  bmiInput.value = bmiValue;

  if (bmiValue < 18.5) {
    weightCondition.innerText = "Under Weight";
  }
}

btnEl.addEventListener("click", calculateBmi);
