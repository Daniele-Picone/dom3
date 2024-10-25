let display = document.querySelector('#display');
let secondsInput = document.querySelector('#secondsInput');
let addTimer = document.querySelector('#addTimer');
let pauseInput = document.querySelector('#pauseInput');
let playInput = document.querySelector('#playInput');
let stopInput = document.querySelector('#stopInput');
let time ;
let rimaningTime;
let interval ;
let pause = true
 
function countDown( ) {
   time = parseInt(display.innerHTML); 

   interval = setInterval(function() {
    document.getElementById('display').innerHTML = time +' s'; 
    if (time <= 0) {
      clearInterval(interval);
      display.innerHTML = 'TEMPO FINITO'
      
    }else{
      rimaningTime = time 
      time--;
    }
  }, 1000); 
}
function pausa(){
   
     pause = true
    clearInterval(interval)
   }
  

  function play() {
  pause = false 
  time = rimaningTime
  countDown()
    
  }

 
  function stop (){
    clearInterval(interval)
    time = '--'
    rimaningTime = '--'
    display.innerHTML = '-- s'
  }
  
  
  
  
  
  
  
  
  addTimer.addEventListener('click',  () => {
  display.innerHTML = secondsInput.value + ' s';
if( display.innerHTML ){
  countDown()
  secondsInput.value = ''

}

}) 

pauseInput.addEventListener('click', () => {
 if( rimaningTime > 0){
  pause = true
  pausa() 
 }
});

playInput.addEventListener('click', ()=>{
  pause = false
  play()
})

stopInput.addEventListener('click', () => {
  
  stop()

})






