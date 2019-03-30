var myArray=["Taner","Atiba","Pepe"];
console.log(myArray[0]);
myArray.reverse();
document.write(myArray);

var number=[1,2,3,4,5,5,6,7];
console.log(number[3]);
var i;

number.reverse();

console.log(number);
 
//nesenemizi yaratıyoruz bu şekilde 
var player=
  {  //properti veriyoruz (özellik)porperti kullanmalıyız
          name:"Taner",//properties
          lastName:"Urun",//properties
          age:23,//properties
          goal:4//properties 
           //bunlar her bir özellik bir araya gelerek nesne oluşturmamızı sağlıyor. 
           //nesne propertilerden oluşuyor 
  };

console.log(player.name);
console.log(player.age);

//yeni nesenmizi yartıık ve propertiesler verdik 
var muhendis={
        name:"Taner",
        surName:"Urun",
        age:32,
        gender:"men",
        driveLisance:true,
        phone:444
}

console.log(muhendis);

for(var i=0;i<muhendis.length;i++){
document.write(muhendis[i]);
}


 var player2=new Object();//yeni nesenmiz bu şekilde yaratbilirizi
 player2.name="Hasim";//atama operatorleri
 player2.surName="Urun";
 player2.age=28;
 player2.goal=8;

 console.log(player2);



 var player3={
            name:"Didier",
            surname:"Drogba",
            age:44,
            number:11,
            salary:4.000000,
            book:"playefotball",
            team:"Galatasaray",
            isMarry:true,
            childs:["x","y","z"]//bir nesene içersinde array tanımlayabiliriz.
 }

 console.log(player3);




 var library=[
 
 {
      title:"İnce Mehmet",
      author:"Yaşar Kemal",
      status:true,

 },
 {
     title:"kuyucaklı yusuf",
     author:"Sabahattin ali",
     status:true
 },
     {
           title:"Memelektetim insan maznaralrı",
           author:"Nazım hikmet ran",
           status:false
     }
];


  for(var i=0;i<library.length;i++)
  {
            var book=library[i].status+"yazari "+library[i].author;
              if(library[i].status==true)
              { 
                    console.log(book+"Bu kitap okundu");
              }
              else{
                console.log(book+"Okunmadi");
              }
  }
