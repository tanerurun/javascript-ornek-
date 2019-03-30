document.title="Uygulamalı javascript Dersleri";
console.log(document.body);
console.log(document.head);

console.log(document.links);
console.log(document.doctype);

var myElement=document.getElementById('myHeader');//burası onemli burada bağlantıyı saglıyoruz.

console.log(myElement);

myElement.textContent="new title";

myElement.innerText="hayat guzel";

myElement.innerHTML='<h2>kucuk baslik</h2>';


console.log(myElement);



myElement.style.backgroundColor='red';//başlığın arka renk değiştirmek icin


var myClass=document.getElementsByClassName('nav-link');
console.log(myClass);


console.log(myClass[1]);
myClass[2].textContent="iletişim";


myClass[2].style.backgroundColor="red";






