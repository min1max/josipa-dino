//import 'bulma/css/bulma.css';
//require('bulma/css/bulma.css');
require('./scss/style.scss'); 

//import Button from '@material-ui/core/Button';

console.log('test')

//import img from './img/map.jpg';
//console.log(img)


import AOS from 'aos';
//import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Jun 27, 2020 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second);


const show = document.getElementById('show');
const rsvp = document.getElementById('rsvp');
const modal = document.getElementById('modal-container');
const modalX = document.getElementById('modal-x');
const close = document.getElementById('close');

//show.addEventListener('click', showDialog);
//close.addEventListener('click', closeDialog);
rsvp.addEventListener('click', clickBtn);
modalX.addEventListener('click', clickModal);

function clickBtn() {
 console.log('clickBtn');
 modal.classList.add('rsvp');
 document.body.classList.add('modal-active');
//  document.body.style.position = 'fixed';
//   document.body.style.top = `-${window.scrollY}px`;
 //document.body.style.position = 'fixed';
 //console.log(this);
 //modal.removeAttribute('class').classList.add('rsvp');
 //$('body').addClass('modal-active');
    
}
function clickModal() {
 console.log('clickModal');
 modal.classList.remove('rsvp');
    modal.classList.add('out');
    document.body.classList.remove('modal-active');
//     document.body.style.position = '';
// document.body.style.top = '';
    //this.classList.remove('bad');
}
