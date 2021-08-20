const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateButton = document.getElementById("calculate");
const resultsDisplay = document.getElementById("results");

calculateButton.addEventListener("click", () => {
  const weight = parseInt(weightInput.value);
  const height = parseFloat(heightInput.value);
  const bmiValue = (1.3*weight) / Math.pow(height, 2.5);
  resultsDisplay.innerText = `Your BMI value is ${bmiValue.toFixed(1)}`;
  //debugger;
});
