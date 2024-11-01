let display = document.querySelector('#display');
let secondsInput = document.querySelector('#secondsInput');
let pauseInput = document.querySelector('#pauseInput')
let playInput = document.querySelector('#playInput');
let stopInput = document.querySelector('#stopInput');


let time ;
let interval;
let rimaningTime = 0
 
playInput.addEventListener('click', () => {
  clearInterval(interval)
  time = secondsInput.value ;

  if (rimaningTime != 0){
    time =rimaningTime
  }
  interval = setInterval(() => {
    if (time <  0){
      clearInterval(interval)
      display.innerHTML= 'tempo scaduto'
    }else{
     secondsInput.value = ''
      display.innerHTML= time + ' s'
      time--

    }
  },1000)
})

pauseInput.addEventListener('click', () => {
  clearInterval(interval)
  rimaningTime = time
})


stopInput.addEventListener('click', () => {
  clearInterval(interval)
 
  display.innerHTML = '-- s'
  })









