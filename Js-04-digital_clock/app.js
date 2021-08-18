const digitalTime = document.querySelector('div')

function setTime() {
  const time = new Date();
  digitalTime.innerHTML = time.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  
}
// this code below can be also used
// toLocaleString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
setTime()
setInterval(setTime, 1000);



