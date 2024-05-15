const usuarios = document.getElementById('usuarios');
let minhasInformacoes = JSON.parse(localStorage.getItem('dados'));
    

minhasInformacoes.forEach(elemento => {
    let exemplo = `<div class="user">
    <h2>Nome : ${elemento.Nome}</h2>
    <p>Idade : ${elemento.Idade}</p>
    <p>Nacionalidade : ${elemento.Nacionalidade}</p>
    <p>Conta : ${elemento.Conta}</p>
    <p>Registro : ${elemento.Registro}</p>
    </div>`;

    usuarios.innerHTML += exemplo;
});

let exemplo = `div class="user">
    <h2>Rógerio</h2>
    <p>30</p>
    <p>Russa</p>
    <p>2365</p>
    <p>234</p>
    </div>`;