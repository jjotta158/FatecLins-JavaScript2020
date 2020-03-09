function validar() {
    var inputs = document.getElementsByTagName("input");
    var nome = inputs["nome"].value;
    var senha = inputs["senha"].value;
    var email = inputs["email"].value;
    var confirm_senha = inputs["confirm_senha"].value;
    var erro = document.getElementById("msg_erro");
    var qtyNome = nome.split("").length;
    console.log(qtyNome);
    console.log(typeof nome);
    if(nome != "" || senha != "" || email != "" || confirm_senha != "") {
        if(qtyNome > 3) {
            if(senha == confirm_senha) {
                alert("Validado com sucesso")
            } else {
                erro.innerText = "suas senhas NÃO são iguais";
            }            
        } else {
            erro.innerText = "Deve ser seu nome completo";
        }
    } else {    
        erro.innerHTML = "Preencha Todos os Campos";
    }
    
}

