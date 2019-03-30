  //nesne yapıcıları --nasıl oluyor --nasıl yaılıyor


   var player1={
       name:"Hakan",
       surName:"Sukur",
       age:34
   };

   console.log(player1);


   var player2={
            name:"taner",
            surName:"Uren",
            age:22
   }


   console.log(player2)

   console.log("-------------------------------------------------");

   function player(name,surName,age)//bu templete kullanarak yukardakilerini uluşturacagız
   {
            this.name=name;
            this.surName=surName;
            this.age=age;
   }

   var player3=new player("Ulas","tas",22);
   var player4=new player("dogan","urun",44);
   var player5=new player("hakan","toprak",44);
   var player6=new player("nazli","tonk",44);
    
   for(var i=0;i<=6;i++)
   {
         var book=[player3,player4,player5,player6];
          console.log(book[i]);
   }

   function library(name,author,status)
   {
          this.name=name;
          this.author=author;
          this.status=status;
   }

   var library1=("x","y",true);
   var library2=("ahmet","mehmet",false);
   var library3=("ali","Dogan",true);
   var library4=("umut","evin",true);

   for(var i=0;i<library.length;i++)
   {
         var list=[library1,library2,library3,library4];
         console.log(list[i]);
   }
   for()