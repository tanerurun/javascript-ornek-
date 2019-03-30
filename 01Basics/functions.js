/*javascript fonksiyon yapısı  

function fonksiyonAdi (parametre){
        yapılması istenen işlem.
}
*/

v1=80;
t1=4;
x1=v1+t1;
   console.log(x1);

v2=65;
t2=6;
x2=v2*t2;
    console.log(x2);

    function  FindX(T,V)
    {
           var x=T*V;
           return x;
    }

        var yol= FindX(5,30);
        console.log(yol);



function sum(x,y,z,m,n)
{
       var sumx=x+y+z+m+n;
       return sumx;
}
var topla=sum(2,3,4,5,6);
console.log(topla);


function cikarma(x,y,z,m,n)
{
       var cikarmax=x-y;
       return cikarmax;
}

var cikar=cikarma(7,2);
console.log("cikarma ="+cikar);

function carpma(x,y)
{
      var carpmax=x*y;
      return carpmax;
}

var carp=carpma(5,5);
document.write("Carpma "+carp);



function bol(x,y)
{
     var bolx;
       if(y!=0)
       {
            bolx=x/y;
            return bolx;
       }
       else
       {
            return "sayi degeri hatali";

       }
}

var boly=bol(5,0);
console.log(boly);


function li(t,v,fn)
{
      var x=t*v;
      return x;
}
var yol=li(4,50);
console.log(yol);


//fonksiyon parametere olarak vermek



   function findx(t,v,fn){
        var x=t*v;
        return fn(x);
   }

   function sum10(param1){ 
       return (param1+10);
   }


   var yol=findx(4,50,sum10);
   console.log(yol);

   var yol2=findx(7,63,sum10);
   console.log(yol2);