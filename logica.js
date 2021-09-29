const calcular = document.getElementById('calcular');

function logica () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const x = (peso / (altura * altura)).toFixed(1);

        let margem = '';

        if (x < 18.5){
            margem = 'Você se encontra abaixo do peso :(, procure um médico(a)!';
        }else if (x < 25) {
            margem = 'Você está com o seu peso muito bom :D.';
        }else if (x < 30){
            margem = 'Cuidado, você está levemente acima do peso.';
        }else if (x < 35){
            margem = 'Cuidado, você está com obesidade grau 1.';
        }else if (x < 40){
            margem = 'Cuidado você está com obesidade grau 2';
        }else {
            margem = 'Cuidado você está com obesidade grau 3.';
        }

        resultado.textContent = `${nome} seu IMC é ${x} e ${margem}`;
        
    }else {
        resultado.textContent = 'Atenção! Você não preencheu todos os campos :( ';
    }

}

calcular.addEventListener('click', logica);