function calculate()
{
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    let bmi = weight / (height * height);

    let category;

    if (bmi < 18.5)
    {
        category = "Underweight";
    }
    else if (bmi < 25)
    {
        category = "Normal weight";
    }
    else if (bmi < 30)
    {
        category = "Overweight";
    }
    else
    {
        category = "Obese";
    }

    document.getElementById("result").innerHTML =
        "Your BMI is: " + bmi.toFixed(2) +
        "<br>Category is: " + category;
}