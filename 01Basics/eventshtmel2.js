var accordion=document.querySelector('#accordion');
var titles=
   accordion.getAttributeNames('h2');

   for(var i=0;i<titles.length;i++)
   {
            titles[i].addEventListener('click',displayAccordion);

   }

   function displayAccordion()
   {
        content=this.nextSibling.nextSibling;
   }