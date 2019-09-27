console.log("Hello World, I'm Mieko");

function menuToggle() {
    var x = document.getElementsByClassName('hidden');
    for(var i = 0; i < x.length; i++) {
           if (x[i].style.display !== 'table') {
               x[i].style.display = 'table'
           } else {
               x[i].style.display = 'none'
           }
}}

// function menuToggle() {
//     var x = document.getElementById('myNavtoggle');
//     if (x.className === 'navtoggle') {
//       x.className = ' responsive';
//     } else {
//       x.className = 'navtoggle';
//     }
//   }