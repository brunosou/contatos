var botaoAdicinar = document.getElementById("adicionar-Contato");
botaoAdicinar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.getElementById("form-adiciona");

    var Contato = form.Contato.value;
    var Telefone = form.Telefone.value;
    var Email = form.Email.value;

    var ContatoTr = document.createElement("tr");

    var ContatoTd = document.createElement("td");
    var TelefoneTd = document.createElement("td");
    var EmailTd = document.createElement("td");

    ContatoTd.textContent = Contato;
    TelefoneTd.textContent = Telefone;
    EmailTd.textContent = Email;

    ContatoTr.appendChild(ContatoTd);
    ContatoTr.appendChild(TelefoneTd);
    ContatoTr.appendChild(EmailTd);

    var tabela = document.getElementById("tabela-contatos");
   
    tabela.appendChild(ContatoTr); 
    
    form.reset();


    


});