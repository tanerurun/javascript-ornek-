



var firstName,seconName,fullName;//Degişkenlerimiz artık var bir değer sahip değiller

//prompt ile kullanıcıdan deger girilmesini istiyoruz prompt bir fonksiyondur.
firstName=prompt("Adınız Giriniz ?");
seconName=prompt("Soyadınızı Giriniz?");//prompt fonksiyonu kullanıyoruz.
fullName=firstName+" "+seconName;//buradaki + toplama anlamında değil her iki strinig birleştir anlamında 
document.write("Merhaba "+ fullName);//alert icinde yazabiliriz.


//iki sayının toplamı 


var number1,number2,sum;
    number1=prompt("Please enter first number form keybaord");
    number2=prompt("Please enter second number form keyboard");
    //sum=number1+number2;//bu şekilde yaparsak yan yana yazacak girilen degerler string olarak algılayacak
    sum=parseInt(number1)+parseInt(number2);
    alert("Summation =  "+sum);
    document.write(sum);


   /* <input type="button" value="black" onclick="changeColor('black')"></input>
    <input type="button" value="white" onclick="changeColor('white')"></input>
    <input type="button" value="red" onclick="changeColor('red')"></input>
    <input type="button" value="green" onclick="changeColor('green')"></input>
    <script type="text/javascript">
                function changeColor(color){
                    document.bgColor=color;
                };
    </script>*/