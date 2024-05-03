onReady();

function onReady() {
	console.log('Javascript is working!');
}
const iceButton = document.getElementById('ice-button');
const fireButton = document.getElementById('fire-button');
let affirmationTable = document.getElementById('affirmation-table');
let pageBody = document.getElementById('emojisHere');

let affirmationInput = document.getElementById('affirmation-affirmation');
let authorInput = document.getElementById('affirmation-author');

let fireCount = 0;
let iceCount = 0;

function createFire(event) {
	console.log('fire button clicked');
	pageBody.innerHTML += '<p class="fire-emojis">🔥</p>';
	fireCount++;
	console.log(`New Fire Count is: ${fireCount}`);
}

function createIce(event) {
	console.log('ice button clicked');
	pageBody.innerHTML += `<p class="ice-emojis">❄️</p>`;
	iceCount++;
	console.log(`New Ice Count is: ${iceCount}`);
}

// - A user cannot create a new affirmation unless 🔥 > ❄️.
// - A user cannot delete an affirmation unless ❄️ > 🔥.

// debugger;
function addAffirmations(event) {
	event.preventDefault();
	if (fireCount >= iceCount) {
		console.log('submitted');
		//add input values as table items
		affirmationTable.innerHTML += `
  <tr> 
  <td>${affirmationInput.value}</td>
  <td>${authorInput.value}</td>
  <td> <button class = "delete-btn" onClick="deleteTask(event)" class="submit-btn">❌</button> </td>
  </tr>`;
	}
	if (fireCount < iceCount) {
		console.log('Unable to add new affirmations until ice is greater than fire');
	}
	affirmationInput.value = '';
	authorInput.value = '';
}

function deleteTask(event) {
	if (fireCount > iceCount) {
		alert('Too much fire! You need more Ice than Fire to delete a task!');
	} else if (fireCount === iceCount) {
		alert(' Fire and Ice are tied! Add one more Ice.');
	} else {
		event.target.parentElement.parentElement.remove();
	}
}
