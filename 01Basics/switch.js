//switch case yapısı
/*  
 switch (kontrol edliecek durum){
      case: 
          kod çalıştır;
           break;
        case 2:
          kod çalıştır;
             break;

             -------
             defualt:
             kod çalıştır;     

 };*/
 var job="doktor";
 switch(job){
        case "ogrenci":
        console.log("ben bir ogrenciyim");
           break;
        case "asker":
          console.log("ı am a soldire");
          break;
          
        case "doktor":
          console.log("i am a doctor");
          break;

        case "muhendis":
           console.log("ı am an engineering");
           break;
        default:
            console.log("Ben bir işsizim");

 }


var job="ogretmen";
 switch(job)
 {
          case "ogrenci":
               console.log("ben bir lise ogrencisiyim");
                break;
           case "hemsire":
                console.log("ben bir hemsireyim");
                break;
           case "mudur":
                console.log("ben bir mudurum");
                break;
            case "kapici":
                 console.log("ben bir kapıcıyım");
                 break;
            case "sofor":
                 console.log("ben bir soforum");
                 break;
            default:
                console.log("ben mesleksizim uzayliyim.");
 }

 var number=1;
    switch(number)
    {
           case 2:
                 console.log("Number 2");
                  break;
            case 3:
                 console.log("Number 3");
                   break;
            case 4:
                 console.log("Number 4");
                  break;
            case 5:
                console.log("Number 5");
                break;
            case 6:
                console.log("Number 6");
                break;
            case 1:
                 console.log("Number 1");
                 break;

            default:
                  console.log("It is not number");
    }