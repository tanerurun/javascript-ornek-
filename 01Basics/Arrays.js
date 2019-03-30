/* javascript array  yapıları*/
   var name="Nabahat";
   var soyad="Naze";
   var ad="Muhabet";
   var abla="Hediyie";
   var kardes="Nesibe";
   var ben="Taner";

   var names=["Nabahat","Naze","Muhabet","Nasibe","Taner","Hediye"];//arraymızı oluşturduk
   console.log(names);


   var ages=[5,9,18,30,33,35];
   console.log(ages);


   var city=['Sirnak','Van','istanbul'];
   console.log(city);

   var quaresma=["Ricardo","Quearesma","34","Player","false"];
   console.log(quaresma);
   quaresma.push("besiktas");//arrayın sonuna ekliyor 
   console.log(quaresma);//javascript sayfanın başından sonuna doğru gittigi icin bir daha consol.log yazmamız gerekiyor.

   quaresma.unshift("Mr");//EN BAŞA EKELEYCEK
   console.log(quaresma);

   quaresma.pop();//en sondaki elemanı siliyor
   console.log(quaresma);

   quaresma.shift();//index=0 olanı siler
   console.log(quaresma);


   console.log(quaresma.indexOf("Ricardo"));//bu da Ricardo kacınc indexte olduğunu verir bize 
   
