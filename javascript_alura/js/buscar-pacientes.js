
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

        if (xhr.status == 200){
            var resposta = xhr.responseText;
            //console.log(resposta);
            //console.log(typeof resposta);
    
            var pacientes = JSON.parse(resposta);
            //console.log(pacientes);
            //console.log(typeof pacientes);
    
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            window.alert("[Erro] 404");
        }
 
    });

    xhr.send(); 

});









//xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");


/* var xml = new XMLRequest();
var xhr = new HttpRequest();
var req = new ReqHttpRequest();
var xhr = new XMLHttpRequest();
var http = new XHRHttpRequest(); 
xhr.open("POST","www.google.com");

*/