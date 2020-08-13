let day = document.getElementById("date");
let numericTime = document.getElementById("numeric");
let secHand = document.getElementById('sec-hand');
let minHand = document.getElementById('min-hand');
let hourHand = document.getElementById('hour-hand');

const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

function printTime() {
    let date = new Date();
    let weekDay = days[date.getDay()];
    let numDay = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let secs = date.getSeconds();
    let mins = date.getMinutes();
    let hours = date.getHours(); 
    day.innerHTML = weekDay + ' ' + (numDay<10?'0':'') + numDay + ' ' + month + ' ' + year ;
    numericTime.innerHTML = (hours<10?'0':'') + hours + " : " + (mins<10?'0':'') + mins + " : " + (secs<10?'0':'') + secs;
};
function moveClock() {
    let date = new Date();
    let secs = date.getSeconds();
    let mins = date.getMinutes();
    let hours = date.getHours(); 

    secHand.style.transform = "rotate(" + secs*6 + "deg)";
    minHand.style.transform = "rotate(" + mins*6 + "deg)";
    hourHand.style.transform = "rotate(" + hours*30 + "deg)";
};

setInterval(printTime, 1000);
setInterval(moveClock, 1000);