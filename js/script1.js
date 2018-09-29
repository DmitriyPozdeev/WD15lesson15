var name = prompt('Введите ваше имя'),
    age = prompt('Введите ваш возраст'),
    isSubscribe = false,
    screenHeight = document.documentElement.clientHeight,
    blocking = document.getElementById('blocking'),
    btn1 = document.getElementById("button1"),
    btn2 = document.getElementById("button2"),
    container = document.getElementsByClassName("container")[0];
    popup = document.getElementsByClassName("popup")[0];

blocking.style.height = screenHeight + "px";
btn1.addEventListener("click", alertAcces);
btn2.addEventListener("click", alertBlock);

if (age < 18) {
 popup.style.display = "none";
 alertBlock();
} 

function alertAcces() {
 alert('Вам разрешен доступ на наш сайт');
 console.log('Вам разрешен доступ на наш сайт');
 container.style.display = "block";
 blocking.style.display = "none";
 popup.style.display = "none";
};

function alertBlock() {
 alert('Доступ на сайт запрещен!');
 container.style.display = "none";
 popup.style.display = "none";
};
