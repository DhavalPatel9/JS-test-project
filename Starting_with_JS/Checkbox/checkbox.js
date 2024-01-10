
function fun1()
{
    if(chk1.checked==true)
    {
        lbl1.innerHTML=chk1.value;
        lbl1.style.color="green";
    }
    if (chk2.checked==true)
    {
        lbl1.innerHTML=chk2.value;
        lbl1.style.color="rgb(15, 99, 99)";
    }

    if(chk3.checked==true)
    {
        lbl1.innerHTML=chk3.value;
        lbl1.style.color=" rgb(234, 127, 13)";
    
    }

    if(chk1.checked==true&&chk2.checked==true)
    {
        lbl1.innerHTML=chk1.value+","+chk2.value;
        lbl1.style.color=" rgb(97, 5, 246)";
    }
     if(chk2.checked==true&&chk3.checked==true)
    {
        lbl1.innerHTML=chk2.value+","+chk3.value;
        lbl1.style.color=" rgb(225, 245, 14)";
    }
    if(chk3.checked==true&&chk1.checked==true)
    {
        lbl1.innerHTML=chk3.value+","+chk1.value;
        lbl1.style.color=" rgb(245, 11, 190)";
    }
        
     if(chk1.checked==true&&chk2.checked==true&&chk3.checked==true)
    {
        lbl1.innerHTML=chk1.value+","+chk2.value+ "," +chk3.value;
        lbl1.style.color="  rgb(4, 245, 56)";
    }

     if (chk1.checked==false&&chk2.checked==false&&chk3.checked==false) {
        
        lbl1.innerHTML=" Please Select Your Ans";
        lbl1.style.color="red";
    }




}
function fun2()
{
    chk1.checked = "";
    chk2.checked = "";
    chk3.checked = "";
    lbl1.innerHTML="";
}