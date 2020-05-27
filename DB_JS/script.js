
//https://satellasoft.com/?materia=requisitando-dados-de-endereco-com-javascript

//window.alert('Foi!!!')

/* $(document).ready(function(){
    console.log("Carregado");
    window.alert('Foi!!!');
});
 */

 
$(document).ready(function(){
    $("#txtCep").focusout(function(){
            //window.alert('Foi!!!')
            var cep = $("#txtCep").val();
            cep = cep.replace("-", "");
 
            var urlStr = "https://viacep.com.br/ws/"+ cep +"/json/";
         
            $.ajax({
                url : urlStr,
                type : "get", //requisição do tipo get 
                dataType : "json", //tipo de retorno de dados
                success : function(data){
                    console.log(data); //retorna o conteúdo
                     
                    $("#txtCidade").val(data.localidade);
                    $("#txtEstado").val(data.uf);
                    $("#txtBairro").val(data.bairro);
                    $("#txtRua").val(data.logradouro);
                    $("#txtComplemento").val(data.complemento);
                },
                error : function(erro){
                    console.log(erro);
                }
            });
    });
});

