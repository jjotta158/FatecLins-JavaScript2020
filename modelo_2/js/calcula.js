

function validar( operacao ) {
    if ( num1 == "" || num2 == "" ) {
        erro.innerHTML = 'Preencha Corretamente os Campos';
        return false;
    } else if ( operacao == 'divisão' && num1 == 0 || num2 == 0 ) {
        erro.innerHTML = 'Não foi possível fazer a operação pois não podemos fazer divisão por 0';
        return false;
    } else {
        return true;
    }
}

function somar(num1, num2) {
    console.log(num1, num2)
    var resultado = document.getElementById( 'lbl-result' );
    var valid = validar( "somar" );

    if ( valid ) {
        return resultado.innerHTML = parseFloat( num1 + num2 );
    } else {
        return false;
    }
}

function subtrair(num1, num2) {
    var resultado = document.getElementById( 'lbl-result' );
    var valid = validar( "subtrair" );

    if ( valid ) {
        return resultado.innerHTML = parseFloat( num1 - num2 );
    } else {
        return false;
    }
}

function multiplicar(num1, num2) {
    var resultado = document.getElementById( 'lbl-result' );
    var valid = validar( "multiplicar" );

    if ( valid ) {
        return resultado.innerHTML = parseFloat( num1 * num2 );
    } else {
        return false;
    }
}
function dividir(num1, num2) {
    var resultado = document.getElementById( 'lbl-result' );
    var valid = validar( "divisão" );
    
    if ( valid ) {
        return resultado.innerHTML = parseFloat( num1 / num2 );
    } else {
        return false;
    }
}

function operar(){
    var num1 = document.getElementById( 'num1' ).value;
    var num2 = document.getElementById( 'num2' ).value;
    var erro = document.getElementById( 'msg-error' );
    
    var num1 = parseFloat( num1 );
    var num2 = parseFloat( num2 );

    console.log(num1, num2)
    let operations = document.getElementById('operations').value;
    switch(operations){
        case 'somar':
            somar(num1, num2);
            break;
        case 'subtrair':
            subtrair(num1, num2);
            break;
        case 'multiplicar':
            multiplicar(num1, num2);
            break;
        case 'dividir':
            dividir(num1, num2);
            break;
    }
    
}
