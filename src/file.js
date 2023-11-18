function calculateStand() {
  let sweight = document.querySelector("#stand-weight");
  let sheight = document.querySelector("#stand-height");
  let result = document.querySelector("#standard");
  let alrt = document.querySelector("#stand-alert");
  seeCondition();
}
function seeCondition() {
  if (sweight === "") {
    result.innerHTML = "  Please provide a valid digit.";
  } else {
    if (sheight === "") {
      result.innerHTML = "  Please provide a valid digit.";
    }
  }
  callBmi();
}
function callBmi() {
  let bmi = ((sweight / (sheight * sheight)) * 703).toFixed(2);
  if (bmi < 18.6) {
    result.innerHTML = `  Under Weight : ${bmi}`;
    alrt.innerHTML = "You might want to add some carbs to your diet😁";
  } else if (bmi >= 18.6 && bmi < 24.9) {
    result.innerHTML = `  Healthy Weight : ${bmi}`;
    alrt.innerHTML = "You are doing great!😁";
  } else {
    result.innerHTML = `  Over Weight : ${bmi}`;
    alrt.innerHTML = "You might want to begin a diet or exercise routine😁";
  }
}

let button = document.querySelector("#stn");
button.addEventListener("click", calculateStand);
