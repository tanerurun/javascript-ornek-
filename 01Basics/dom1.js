  var i=0;
  var images=['http://lorempixel.com/400/200/','http://lorempixel.com/400/200/','http://lorempixel.com/400/200/'];
  var durationl=2000;
     function slideImg(){
                 document.slide.src=images[i];
                   if(i<images.length-1)
                   {
                        i++;
                   }
                     else
                     {
                         i=0;
                     }
            setTimeout("slideImg()",durationl);

     }

     window.onload=slideImg;