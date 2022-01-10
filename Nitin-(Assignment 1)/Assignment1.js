var form = document.querySelector("#input");

form.addEventListener("submit", function(e){
    e.preventDefault();
    var inputAmt = document.querySelector("#amt").value;
    inputAmt = parseInt(inputAmt);
    
    //check conditions
    if(inputAmt >= 35){
        var leftAmt = inputAmt - 35;
        alert("Ashish can buy both Ice-Cream & Grocery and the amount left is : (Rs) " + leftAmt);
    }
    else if(inputAmt === 20 || inputAmt < 35){
        alert("Ashish was only able to purchase Grocery");
    }
    else{
        alert("Ashish wasn't able to purchase due to insufficient amount");
    }
});