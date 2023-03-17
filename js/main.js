function calculateBMI() {
    // get weight and height input values
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    // validate input values
    if (weight === '' || height === '') {
        alert("Please enter your weight and height");
        return;
    }

    // convert height to meters
    height /= 100;

    // calculate BMI
    let bmi = weight / (height * height);

    // display BMI result
    let result = document.getElementById("result");
    result.innerHTML = "Your BMI is: " + bmi.toFixed(2);

    // set alert type based on BMI value
    let alertType;
    if (bmi < 18.5) {
        alertType = "alert-danger"; // underweight
    } else if (bmi >= 18.5 && bmi < 25) {
        alertType = "alert-success"; // normal weight
    } else if (bmi >= 25 && bmi < 30) {
        alertType = "alert-warning"; // overweight
    } else {
        alertType = "alert-danger"; // obese
    }

    // display BMI status with appropriate alert
    let bmiStatus = document.createElement("div");
    bmiStatus.classList.add("alert");
    bmiStatus.classList.add(alertType);
    bmiStatus.innerHTML = getBMIStatus(bmi);
    result.appendChild(bmiStatus);
}

// function to get BMI status based on BMI value
function getBMIStatus(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
