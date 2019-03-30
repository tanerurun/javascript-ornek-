/* Javascript fonksiyon yapısı SCOPE*/
var x;//global
function sampleFunction(){
      x=37;
      var y;//local
      console.log(x);
}
var deger=sampleFunction();
console.log(deger);
 