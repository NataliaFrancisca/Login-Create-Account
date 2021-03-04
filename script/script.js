let inputEmail = document.getElementById("inputEmail");
let spanEmail = document.getElementsByClassName('spanEmail');

let inputPassword = document.getElementById("inputPassword");
let spanPassword = document.getElementsByClassName("spanPassword");

let inputName = document.getElementById("inputName");
let spanName = document.getElementsByClassName("spanName");

animationInputEmail();
animationInputPassword();
animationInputName();


function animationInputEmail(){

	inputEmail.addEventListener("focusin", () => {
		animateWords(spanEmail);
	})

	inputEmail.addEventListener("focusout", () => {
		removeAnimateWords(spanEmail);
	})
}

function animationInputPassword(){

	inputPassword.addEventListener("focusin", () => {
		animateWords(spanPassword);
	})

	inputPassword.addEventListener("focusout", () => {
		removeAnimateWords(spanPassword);
	})
}


function animationInputName(){

	inputName.addEventListener("focusin", () => {
		animateWords(spanName);
	})

	inputName.addEventListener("focusout", () => {
		removeAnimateWords(spanName);
	})
}


function animateWords(span){

	for(let y = 0; y < span.length; y++){
		span[y].classList.add("efectSpan");
	}
}

function removeAnimateWords(span){
	for(let y = 0; y < span.length; y++){
		span[y].classList.remove("efectSpan");
	}
}