function fun1()
 {
    var a,b,c,d,e,t;
    a=parseInt(m1.value);
    b=parseInt(m2.value);
    c=parseInt(m3.value);
    d=parseInt(m4.value);
    e=parseInt(m5.value);
    t=a+b+c+d+e;
    total.value=t;

    per.value=(t*100)/500;

    var p=per.value;
    
    if(p>=70)
    {
        grd.value="A Grade";
        res.innerHTML=" You have clear your exam";

    }
    else if(p>=60)
    {
grd.value="B Grade";
res.innerHTML=" You have clear your exam";
    }

else if ( p>=50) {


grd.value="c Grade";
res.innerHTML=" You have clear your exam";
}

else if (p>=35) {
    grd.value="D Grade";
    res.innerHTML=" You have clear your exam";
}

else {
    grd.value=" Sorry You are not clear exam";
    res.innerHTML=" You have not clear your exam";
}

 }


 function fun2()
 {

m1.value="";
m2.value="";
m3.value="";
m4.value="";
m5.value="";
total.value="";
per.value="";
grd.value="";

// document.getElementById("m2").value="";


 }
 function fun3()
 {
    window.close()
 }