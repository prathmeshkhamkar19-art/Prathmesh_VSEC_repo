function calculate()
{      //js variable                               html variable
    let weight = parseFloat(document.getElementById("weight").value);       // use parsefloat to get data in float 
    let height = parseFloat(document.getElementById("height").value);       // geteleme...() function used to get the data from *html fil(documnet )  in js variable that is first 

    let bmi = weight / (height * height);   // formula to find bmi

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

    document.getElementById("result").innerHTML =   // using innerhtml we can make direct change in html file on that partiular id 
        "Your BMI is: " + bmi.toFixed(2) +
        "<br>Category is: " + category;
}