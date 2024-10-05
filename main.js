let display = document.querySelector('#display');
let secondsInput = document.querySelector('#secondsInput');
let addTimer = document.querySelector('#addTimer');
let pauseInput = document.querySelector('#pauseInput');
let playInput = document.querySelector('#playInput');
let stopInput = document.querySelector('#stopInput');
let interval; 

 
function countDown() {
  let time = parseInt(display.innerHTML); 
   interval = setInterval(function() {
    document.getElementById('display').innerHTML = time +' s'; 
    if (time <= 0) {
      clearInterval(interval);
      display.innerHTML = 'TEMPO FINITO'
      
    }else{
      time--; 
    }
  }, 1000); 
  }
function pausa(){
    clearInterval(interval)
    pause = true
  }

  function stop (){
    clearInterval(interval)
    display.innerHTML = '00 s'
  }








addTimer.addEventListener('click',  () => {
  display.innerHTML = secondsInput.value + ' s';
   secondsInput.value = ''
}) 
playInput.addEventListener('click', ()=>{
  let time = parseInt(display.innerHTML)
   countDown(time);
  secondsInput.value = ''
  
})

pauseInput.addEventListener('click', () => {
  pausa();  
});

stopInput.addEventListener('click', () => {
  
  stop()

})






