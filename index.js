inputTag = document.getElementById('guess');
btnTag = document.querySelector('.btn');

imageTag = document.getElementById('image');
mes1 = document.querySelector('.message1');

mes2 = document.querySelector('.message2');
min = document.querySelector('#min');
max = document.querySelector('#max');
min = 0;	

var max = 10;	
let redoNum = Math.floor(Math.random() * max);

playChance = 3;

function load() {
	btnTag.addEventListener('click', function() {
		window.location.reload();
	});
}

btnTag.addEventListener('click',function() {



	inputNum = Number(inputTag.value);


	if (inputNum < max && inputNum > min) {


	if (inputNum === redoNum) {

		inputTag.style.borderColor = 'green';
		btnTag.style.borderColor = 'green';
		mes1.color = 'green';
		mes1.textContent = 'woww Amazing..You are winner!!!';
		mes1.style.color = 'green';
		btnTag.textContent = 'Play Again';
		imageTag.src = 'tr.png';
		mes2.textContent = "";
		inputTag.setAttribute('disabled', '');
		load()

	} else {
		inputTag.style.borderColor = "red";
		btnTag.style.borderColor = "red";
		mes2.textContent = "incorrect!! Please Try Again!";
		mes2.style.color = 'red';
		btnTag.textContent = "Play Again";
		imageTag.src = 'sss.png';
		mes1.textContent = "";
		playChance += -1;


		if( playChance === 0) {
		mes2.textContent = `Game Over! Winning Number is ${redoNum}`;
		inputTag.setAttribute('disabled', '');

		load();
		}
	}

 
 } else {
 	mes2.textContent = "The Number Must Be Between 0 and 10";
 	imageTag.src = 'sss.png'
 }
	inputTag.value = "";
});
