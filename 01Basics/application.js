//fonksiynların uygulamaları
//cevre 2*pi*r
//alan=

var yaricap=prompt("Yari capi giriniz.");
function daireCevreAlan(yaricap){
    var cevre=parseInt(2*Math.PI*yaricap);
    alert("Dairenin cevresi "+cevre);

    var alan=parseInt(Math.PI*yaricap*yaricap);
    alert("Dairenin  alanı : "+alan);
}
var x=daireCevreAlan(yaricap);
 

var yaricap=prompt("lütfen yaricap giriniz");

function hesap(yaricap)
{
      var cevre=parseInt(2*Math.PI*yaricap);
      document.write(cevre);
      var alan=parseInt(Math.PI*yaricap*yaricap);
      document.write("Dairenin alanı : " +alan);
}

hesap(yaricap);


var vize=prompt("Please enter midtermexam");
var final=prompt("Please enter final exam result");

function lessonResult(vize,final){
           var lecturnotes=parseInt(vize*0.4+final*0.6);
                  if(lecturnotes>=60)
                  {
                       console.log("You are passing lecture ");
                  }
                  else
                  {
                      console.log("Sorry Sorry Sorry see you next seasson");
                  }

}

lessonResult(vize,final);