var a=4;
var b=-3;
var c=6;
  
    if(a>b && a>c)
    { 
           if(b>c)
           {
                   alert(a + "" +b+""+ c);
           }
           else
           {
               alert(a+""+c+""+b);
           }
    }

    else if(b>a && b>c)
    {
           if(a>c)
           {
                   alert(b+ "" +a+""+c);
           }
           else
           {
                 alert(b+""+c+""+a);
           }
    }
    else if(c>b&& c>a)
    {
            if(b>a)
            {
                    alert(c+""+b+""+c);
            }
            else
            {
                  alert(c +" "+ a +" "+ b);
            }
    }