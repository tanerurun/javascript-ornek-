var myElements=document.getElementsByTagName('h2');
console.log(myElements);

myElements[0].textContent='h4 baslik';


for(var i=0;i<myElements.length;i++)
{
       myElements[i].textContent="yeni başlıklar";
}