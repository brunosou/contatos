function inicialModal(modalId){
    var modal = document.getElementById(modalId);
    modal.classList.add("mostrar"); 
    modal.addEventListener("click", function(event){
        if(event.target.id == modalId || event.target.className == "fechar"){
            modal.classList.remove("mostrar");
        }

    });
    // explicação a nivel de codigo

    /* Estou acessando o meu metodo add do meu objeto classlist que e´uma propriedade filha do meu objeto modal. 
    No meu metodo add estou passando como parametro a string "mostrar".*/


    // explicação a nivel de funcionalidade 

    /* Estou adicionando o valor "mostrar" no meu objeto classlist que e´uma propriedade filha do meu objeto modal. */
    /* Estou adicionando o valor "mostrar" na minha lista de classes que e´uma propriedade filha do meu objeto modal. */
}

var botao = document.querySelector(".butao-inicial");
botao.addEventListener('click', function(){
    inicialModal("modal-tudo");
});


