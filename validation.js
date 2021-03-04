let name = document.getElementById("inputName");
let email = document.getElementById("inputEmail");
let password = document.getElementById("inputPassword");

function validaCamposCreate(){

	if(name.value == "" || name.lenght <= 1){
		alert("Digite um nome válido!")
		name.focus();
		return false;
	}

	if(email.value == "" || email.lenght <= 10){
		alert("Digite um email válido!");
		email.focus();
		return false;
	}

	if(password.value == "" || password.lenght < 8){
		alert("Digite uma senha válida!");
		password.focus();
		return false;
	}

	if(name.value && email.value && password.value ){
		alert("Cadastro realizado com sucesso!");
			name.value = "";
			password.value = "";
			email.value = "";
			name.focus();
	}else{
		return false;
	}

}


function validaCamposLogin(){

	if(email.value == "" || email.lenght <= 10){
		alert("Digite um email válido!");
		email.focus();
		return false;
	}

	if(password.value == "" || password.lenght < 8){
		alert("Digite uma senha válida!");
		password.focus();
	}

	if(email.value && password.value ){
		alert("Cadastro realizado com sucesso!");
			email.value = "";
			password.value = "";
			email.focus();
	}else{
		return false;
	}

}