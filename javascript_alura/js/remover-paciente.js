
var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    console.log(event.target)
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;

    paiDoAlvo.classList.add("fadeOut");

    setTimeout(function(){
        paiDoAlvo.remove();
    }, 500);

    

});


/* pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        console.log("duplo!")
        this.remove();
});
 */