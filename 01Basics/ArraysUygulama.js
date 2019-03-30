//basit bir uygulama
var array=[4,7,5,2];
var toplam=0;
var carpim=1;
//değişkenlerimiz oluşturduk

for(var i=0;i<array.length;i++)
{
      toplam=toplam+array[i];//sayilarin toplami yapılacak
      
      carpim=carpim*array[i];
}
console.log("Toplam eleman degeri "+toplam);
console.log("Toplam carpim degeri "+carpim);