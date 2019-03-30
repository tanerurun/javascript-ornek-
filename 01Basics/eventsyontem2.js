var myElement=document.getElementById('button2');
myElement.onclick=function()
  {
        alert("Ben ikinic button");
  };

  var myElement2=document.querySelector('button');
  myElement2.onclick=function()
  {
     alert("ben birinici button javascriptten geliyorum")   ;
  };




  var myElement3=document.getElementById('button4');
 


  var One=document.querySelector('#numberOne');
  var Two =document.querySelector('#numberTwo');
 var sum=document.querySelector('#sum');


 One.addEventListener('input',topla);
 Two.addEventListener('input',topla);

   function topla()
   {  
         var one1=parseInt( One.value);
         var two2=parseInt( Two.value);
         sum=one1+two2;
         sum.innerHTML="sum";
   }