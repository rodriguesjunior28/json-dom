const nome = document.getElementById('nome');
const idade = document.getElementById('idade');
const nacionalidade = document.getElementById("nacionalidade");
const btn = document.getElementById('btn');
const pessoas = [];


btn.addEventListener('click',() => {
    
    let pessoa = {
        "Nome" : nome.value,
        "Idade" : idade.value,
        "Nacionalidade" : nacionalidade.value,
        "Registro" : Math.floor(Math.random() * 1000),
        "Conta" : Math.floor(Math.random() * 100000)
    };

    console.log(pessoas);
    pessoas.push(pessoa);
    console.log(pessoas);
    localStorage.setItem('dados',JSON.stringify(pessoas));
    
    
});