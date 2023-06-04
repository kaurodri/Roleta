document.getElementById('mensagem').textContent = "Elemento 1\nElemento 2\nElemento 3\nElemento 4"

document.getElementById("mensagem").addEventListener("input", function (event) {
    let tt = document.getElementById('mensagem').value;
    let coisas = tt.split("\n");
    
    document.getElementById('elemento1').textContent = coisas[0];
    document.getElementById('elemento2').textContent = coisas[1];
    document.getElementById('elemento3').textContent = coisas[2];
    document.getElementById('elemento4').textContent = coisas[3];
})


function girar() {
    let tt = document.getElementById('mensagem').value;
    let coisas = tt.split("\n");

    document.getElementById('resultado').textContent = `Ganhador: `;
    document.getElementById('girarBtn').disabled = true;

    function exibirResultado(indice) {
        document.getElementById('resultado').textContent = `Ganhador: ${coisas[indice]}`;
        document.getElementById('girarBtn').disabled = false;
    }
    let random = Math.floor(Math.random() * coisas.length);

    let rotacao = 0;
    const animacao = setInterval(() => {
        rotacao += 36;
        document.querySelector('.roleta').style.transform = `rotate(${rotacao}deg)`;
        if (rotacao >= 360) {
            clearInterval(animacao);
            exibirResultado(random);
        }
    }, 100);
}