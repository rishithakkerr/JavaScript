function calculate()
{
    let selectedDrink="";
    let price=0;

    if(document.getElementById("tea").checked)
    {
        selectedDrink="Tea";
        price= 65;
    }

    else if(document.getElementById("coffee").checked)
    {
        selectedDrink="Coffee";
        price= 110;
    }

    else if(document.getElementById("iceTea").checked)
    {
        selectedDrink="Ice Tea";
        price= 120;
    }

    else if(document.getElementById("espresso").checked)
    {
        selectedDrink="Espresso";
        price= 200;
    }

    else
    {
        document.getElementById("result").innerHTML="❌ Please select a beverage.";
        return;
    }
   
    document.getElementById("result").innerHTML= "✅ You selected: " + selectedDrink + "<br>Total Amount: ₹" + price; 
}