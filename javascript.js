function compute() {
    var principal = document.getElementById("principal").value;
    if (principal <= "0") {
        alert("Please enter the positive number");
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate) / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var amount = interest;

    if (principal.value < 0) {
        alert("Please enter the positive number");
        principal.focus();
        return false;
    }
    document.getElementById("result").innerHTML="\<br\>If you deposit "+principal+
    " Rs,\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+
    " Rs,\<br\>in the year "+year+"\<br\>"

}
    function updateRate() 
    {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
    }