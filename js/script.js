function meuEscopo(){
    const form = document.querySelector('.form');
    const result = document.querySelector('.resultado');//pretar atenção no modo de seleção;

    const pessoas = [];//array do formulário para guardar cada objecto criado;

    function recebeEventoForm(evento){
        evento.preventDefault(); //faz com que por norma o formulário não seja enviado;

       const nome = form.querySelector('.name'); //linka a input com o Dom; 
       const sobrenome = form.querySelector('.sobrenome');
       const idade = form.querySelector('.idade');
       const peso = form.querySelector('.peso');
       const altura = form.querySelector('.altura');

       pessoas.push({                         //cria o objecto e adiciona elementos dentro do array pessoas;
          nome: nome.value,
          sobrenome: sobrenome.value,
          idade: idade.value,
          peso: peso.value,
          altura: altura.value
       });

       console.log(pessoas);
       result.innerHTML += `<p>${nome.value} ${sobrenome.value} de ${idade.value} anos de idade, com peso ${peso.value} e altura ${altura.value}</p>`;
    }
   

    form.addEventListener('submit',recebeEventoForm);  
}

meuEscopo();// chama a função;











    /*form.onsubmit = function(evento){
        evento.preventDefault();
       alert(1);
       console.log('Foi enviado.')
    };*/