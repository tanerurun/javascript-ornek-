// mantıksal operatorler
//AND && onermeirin 2 side doğru olmalı
//OR || önermesinde 1 tanesi doğru olmalı
//NOT ! true false çevirmi yapar

var age=12;
 
if(age>=20 && age<=50)
{
    console.log("sonuc true true oldu");
}
else
{
    console.log("uye olamasiniz.");
}


var yas=28;
var job='doktor';
 if(job=='doktor' || yas>=35)
 {
       if(yas<=18)
        {
             console.log("uye olamsınız");
        }
         else{

   console.log("Uye yapabilirisniz.");
}
 }

 else
 {
      console.log("Uye OLAMASINIZ!!!");
 }


 var isMarried=true;
 if(isMarried)
 {
        console.log("Evlisiniz");
 }
 else
 {
     console.log("evli değilsiniz.");
 }