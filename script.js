onReady();

function onReady() {
  console.log('Javascript is working!');
}
let iceButton = document.getElementById("ice-button")
let fireButton = document.getElementById("fire-button");
let pageBody = document.getElementById("emojisHere")

function createFire (event){
  console.log('fire button clicked')
pageBody.innerHTML += '<p>🔥</p>'
}

function createIce (event){
 console.log('ice button clicked')  
  pageBody.innerHTML += `<p>❄️</p>`
  
  
}