var name,
    age,
    isSubscribe = true,
    screenHeight = document.documentElement.clientHeight,
    popup = document.getElementById('popup'),
    btn1 = document.getElementsByClassName("button")[1],
    btn2 = document.getElementsByClassName("button")[2];


popup.style.height = screenHeight + "px"; 

 

function alertAcces() {
 alert('Вам разрешен доступ на наш сайт');
 console.log('Вам разрешен доступ на наш сайт');
 body.style.display = "block";
 popup.style.display = "none";
};

function alertBlock() {
 alert('Доступ на сайт запрещен!');
 body.style.display = "none";    
}
if (age >= 18 && isSubscribe) {
 alertAcces();
} else {
 
}
