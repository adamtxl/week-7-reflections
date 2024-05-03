onReady();

function onReady() {
  console.log('Javascript is working!');
}
const iceButton = document.getElementById("ice-button");
const fireButton = document.getElementById("fire-button");
let affirmationTable = document.getElementById("affirmation-table")
let pageBody = document.getElementById("emojisHere");

let affirmationInput = document.getElementById("affirmation-affirmation");
let authorInput = document.getElementById("affirmation-author");

function createFire (event){
  console.log('fire button clicked')
pageBody.innerHTML += '<p>🔥</p>'
}

function createIce (event){
 console.log('ice button clicked')  
  pageBody.innerHTML += `<p>❄️</p>`
  
  
}
// debugger;
function addAffirmations (event){
  event.preventDefault();
  console.log('submitted')
  //add input values as table items
  affirmationTable.innerHTML += 
  `<tr> 
  <td>${affirmationInput.value}</td>
  <td>${authorInput.value}</td>
  <td> <button onClick="deleteTask(event)">delete</button> </td>
  </tr>`

}

function deleteTask(event) {
  event.target.parentElement.parentElement.remove();
}