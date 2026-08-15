function calculate()
{
    let weight = parseInt(document.getElementById("weight").value);
    let height = parseInt(document.getElementById("height").value);

    let bim = weight / (height *height);

    let catagory;

    if (bmi <18.5)
    {
        catagory = "underweight";
    }

    else if(bmi < 25)
    {
        catagory = "normal weight ";

    }
    else if(bmi <30)
    {
        catagory = "Overweight";

    }
    else
    {
        catagory = "Obese";
    }
    document.getElementById("result").innerHTML=
    'Your BMI is :' + bmi.toixed(2)+
    'Category is : '+ catagory;
}