  //kutuphane uygulaması

  var library=[
      {
          title:"uzun ince bir yoladyım",
          author:"Aşık veyser",
          status:true
        },
      {
          title:"ağrı dağı",
          author:"Yaşar Kemal",
          status:true
        },
      {
          title:"ferarisiniz satan bilge",
          author:"Robin Sharma",
          status:true
        },
        {
            title:"Galata sokagi",
            author:"Furkan taha",
            status:false
        }
    ];


    for(var i=0;i<library.length;i++)
    { 
          var book=library[i].status+ " Yazari " + library[i].author+ " - ";
            if(library[i].status)
            {
                    console.log(book+ " Okundu ");
            }
            else{
                 console.log(book+ " OKUNMADI!!!!");
            }
    }