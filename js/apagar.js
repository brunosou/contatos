var contato = document.querySelectorAll(".contatos");

var tabela = document.getElementById('tabela-contatos');

    tabela.addEventListener("dblclick",function(event){
       event.target.parentNode.remove();
    });


