function fun1() {
 var a,b,c;
 a=parseInt(es.value)
hra.value = (a*10)/100;
da.value = (a*5)/100;
b=parseInt(hra.value)
c=parseInt(da.value)
total.value = a + b + c;
pf.value = (total.value*6)/100;
ns.value = total.value - pf.value; 
}