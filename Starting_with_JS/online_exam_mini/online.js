function fun1() {
   var r=0, w=0, at=0, ut=0;
   if (a.checked==false && b.checked==false && c.checked==false){
ut++;
   }
   else if (a.checked==true){
      r++;
      at++;
   }
   else {
      w++;
      at++;
      
   }
   if (A.checked==false && B.checked==false && C.checked==false){
      ut++;
         }
         else if (B.checked==true){
            r++;
            at++;
         }
         else {
            w++;
            at++;
         }
         
   
att.value=at;
unatt.value=ut;
wran.value=w;
ran.value=r;
gm.value= r *2;
cm.value=(ut+w)*0.25;
rm.value=gm.value -cm.value;


   }
   function fun2()
    {
   
   a.checked="";
   b.checked="";
  c.checked="";
   A.checked="";
   B.checked="";
   C.checked="";
   att.value="";
   unatt.value="";
   wran.value="";
   ran.value="";
   gm.value="";
   cm.value="";
   rm.value="";
   
   
   
    }
    function fun3()
    {
      window.close()
   }
   