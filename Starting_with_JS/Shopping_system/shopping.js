function fun1()
 {
    var a,b,t;
    a=parseInt(price.value);
    b=parseInt(qty.value);
    
    t=a*b;
    ta.value=t;
var at=ta.value;


if (at>=1500)
{td.value= (at*15)/100 }
else if (at>=1000) {
    {td.value= (at*10)/100 }
}
else if (at>=500) {
    {td.value= (at*5)/100 }
}
else {
    td.value=0
}

np.value=at-td.value;

l2.innerHTML="Thank you for Shopping " + cn.value + " Good Luck";

 }
    // per.value=(t*100)/500;

    // var p=per.value;
    function fun2()
    {
   
   price.value="";
   qty.value="";
   ta.value="";
   td.value="";
   np.value="";
   cn.value="";
   pn.value="";
   l2.innerHTML="";
   
   // document.getElementById("m2").value="";
   
   
    }
    function fun3()
 {
    window.close()
 }
   