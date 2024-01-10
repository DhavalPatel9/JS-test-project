

function fun1() {
    
        var r=0, w=0, at=0, ut=0;
   if (ans1.checked==false && ans2.checked==false && ans3.checked==false){
ut++;
   }
   else if (ans1.checked==true){
      r++;
      at++;
      img1.src="../online_exam_mini/right.png";
      img1.width=20;
      img1.height=20;
   
      
      aud1.src="../online_exam_mini/the-correct-answer-33-183620.mp3"
      
   }
   else {
      w++;
      at++;
      img1.src="../online_exam_mini/wrong.png";
      img1.width=20;
      img1.height=20;
      aud1.src="../online_exam_mini/wrong-answer-126515.mp3"
   }
   if (Ans1.checked==false && Ans2.checked==false && Ans3.checked==false){
      ut++;
         }
         else if (Ans2.checked==true){
            r++;
            at++;
            img2.src="../online_exam_mini/right.png";
      img2.width=20;
      img2.height=20;
      aud2.src="../online_exam_mini/the-correct-answer-33-183620.mp3"
         }
         else {
            w++;
            at++;
            img2.src="../online_exam_mini/wrong.png";
      img2.width=20;
      img2.height=20;
      aud2.src="../online_exam_mini/wrong-answer-126515.mp3"
      
         }
         if (Ans31.checked==false && Ans32.checked==false && Ans33.checked==false){
            ut++;
               }
               else if (Ans32.checked==true){
                  r++;
                  at++;
                  img3.src="../online_exam_mini/right.png";
                  img3.width=20;
                  img3.height=20;
                  aud3.src="../online_exam_mini/the-correct-answer-33-183620.mp3"
               }
               else {
                  w++;
                  at++;
                  img3.src="../online_exam_mini/wrong.png";
      img3.width=20;
      img3.height=20;
      aud3.src="../online_exam_mini/wrong-answer-126515.mp3"
               }
               if (Ans41.checked==false && Ans42.checked==false && Ans43.checked==false){
                ut++;
                   }
                   else if (Ans43.checked==true){
                      r++;
                      at++;
                      img4.src="../online_exam_mini/right.png";
                      img4.width=20;
                      img4.height=20;
                      aud4.src="../online_exam_mini/the-correct-answer-33-183620.mp3"
                   }
                   else {
                      w++;
                      at++;
                      img4.src="../online_exam_mini/wrong.png";
      img4.width=20;
      img4.height=20;
      aud4.src="../online_exam_mini/wrong-answer-126515.mp3"
                   }
                   if (Ans51.checked==false && Ans52.checked==false && Ans53.checked==false){
                    ut++;
                       }
                       else if (Ans51.checked==true){
                          r++;
                          at++;
                          img5.src="../online_exam_mini/right.png";
                          img5.width=20;
                          img5.height=20;
                          aud5.src="../online_exam_mini/the-correct-answer-33-183620.mp3"
                       }
                       else {
                          w++;
                          at++;
                          img5.src="../online_exam_mini/wrong.png";
      img5.width=20;
      img5.height=20;
      aud5.src="../online_exam_mini/wrong-answer-126515.mp3"
                       }
                 
             
     att.value=at;
     unatt.value=ut;
     wran.value=w;
     ran.value=r;
     }
    
function fun2()
 {

ans1.checked="";
ans2.checked="";
ans3.checked="";
Ans1.checked="";
Ans2.checked="";
Ans3.checked="";
Ans31.checked="";
Ans32.checked="";
Ans33.checked="";
Ans41.checked="";
Ans42.checked="";
Ans43.checked="";
Ans51.checked="";
Ans52.checked="";
Ans53.checked="";
att.value="";
unatt.value="";
wran.value="";
ran.value="";
img1.src=""; 
img1.height="";
img1.width="";
img2.src="";
img2.height="";
img2.width="";
img3.src="";
img3.height="";
img3.width="";
img4.src="";
img4.height="";
img4.width="";
img5.src="";
img5.height="";
img5.width="";

 }
 function fun3()
 {
  window.close()
 }