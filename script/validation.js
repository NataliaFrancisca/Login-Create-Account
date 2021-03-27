let name = document.getElementById("inputName");
let email = document.getElementById("inputEmail");
let password = document.getElementById("inputPassword");
let textErro = document.querySelector(".errorText");

function validaCamposCreate(){

	if(name.value == "" || name.value.lenght <= 1){
		alert("Digite um nome válido!")
		textErro.innerHTML = "Digite um nome válido!";
		name.focus();
		return false;
	}

	if(!validateEmail(email.value)){
		alert("Digite um email válido!");
		textErro.innerHTML = "Digite um e-mail válido!";
		email.focus();
		return false;
	}
	
	if(password.value == "" || password.value.length < 8){
		alert("Digite uma senha válida!");
		textErro.innerHTML = "Digite uma senha válida!";
		password.focus();
		return false;
	}

	if(name.value && email.value && password.value ){
		alert("Cadastro realizado com sucesso!");
		textErro.innerHTML = "Cadatro realizado com sucesso!";
			name.value = "";
			password.value = "";
			email.value = "";
			name.focus();
	}else{
		return false;
	}

}

function validaCamposLogin(){

	if(!validateEmail(email.value)){
		alert("Digite um email válido!");
		textErro.innerHTML = "Seu e-mail não está correto!";
		email.focus();
		return false;
	}

	if(password.value == "" || password.value.length < 8){
		alert("Digite uma senha válida!");
		textErro.innerHTML = "Sua senha não está correta!";
		password.focus();
		return false;
	}

	if(email.value && password.value ){
		alert("Cadastro realizado com sucesso!");
		textErro.innerHTML = "Login realizado com sucesso!";
			email.value = "";
			password.value = "";
			email.focus();
	}else{
		return false;
	}

}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  	return re.test(email);
}

