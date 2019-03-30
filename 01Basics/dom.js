window.onload=function(){
       var beforButton=document.querySelector("beforButton");

        beforButton.addEventListener("click",function(){
              var newNode=document.createElement("p");
               newNode.innerHTML="<strong>New pragraf element</strong>";
               newNode.setAttribute("id","myNode");
        });
}