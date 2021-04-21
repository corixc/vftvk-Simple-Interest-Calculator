function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var ys = document.getElementById("years").value;
    var val = validate_p();
    if(val){
        var i = p*ys*r/100;
        var y = new Date().getFullYear()+parseInt(ys);
        document.getElementById("result").innerHTML = "<br\>If you deposit <mark>"+p+"</mark>,\<br\>at an interest rate of <mark>"+r+"%</mark>\<br\>You will receive an amount of <mark>"+i+"</mark>,\<br\>in the year <mark>"+y+"</mark>\<br\>"
    }
}
function updaterate()
{
    var rv = document.getElementById("rate").value;    
    document.getElementById("rate_val").innerText=rv+"%";
}
function validate_p(){
    var p =document.getElementById("principal").value;
    var response
    if(p<=0){
        response=alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }else
    {
        return true;
    }
    
}       