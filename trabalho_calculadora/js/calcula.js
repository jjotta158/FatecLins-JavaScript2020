function validar( operacao ) {
    var num1 = document.getElementById( 'num1' );
    var num2 = document.getElementById( 'num2' );
    var erro = document.getElementById( 'msg-error' );
    num1 = parseFloat( num1.value );
    num2 = parseFloat( num2.value );
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

function somar() {
    var resultado = document.getElementById( 'lbl-result' );
    var valid = validar( "somar" );
    num1 = parseFloat( num1.value );
    num2 = parseFloat( num2.value );
    if ( valid ) {
        return resultado.innerHTML = parseFloat( num1 + num2 );
    } else {
        return false;
    }
}

function subtrair() {
    var resultado = document.getElementById( 'lbl-result' );
    var valid = validar( "subtrair" );
    num1 = parseFloat( num1.value );
    num2 = parseFloat( num2.value );
    if ( valid ) {
        return resultado.innerHTML = parseFloat( num1 - num2 );
    } else {
        return false;
    }
}

function multiplicar() {
    var resultado = document.getElementById( 'lbl-result' );
    var valid = validar( "multiplicar" );
    num1 = parseFloat( num1.value );
    num2 = parseFloat( num2.value );
    if ( valid ) {
        return resultado.innerHTML = parseFloat( num1 * num2 );
    } else {
        return false;
    }
}
function dividir() {
    var resultado = document.getElementById( 'lbl-result' );
    var valid = validar( "divisão" );
    num1 = parseFloat( num1.value );
    num2 = parseFloat( num2.value );
    if ( valid ) {
        return resultado.innerHTML = parseFloat( num1 / num2 );
    } else {
        return false;
    }
}
