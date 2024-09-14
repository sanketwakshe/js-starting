// digital clock
const clock = document.getElementById('clock');
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// setInterval(function(){

// },1000)
// ha pratyek movmentla run honar ani kasa te 1000 sec nantrer mahnun ha setinterval  function vaprala ahe
