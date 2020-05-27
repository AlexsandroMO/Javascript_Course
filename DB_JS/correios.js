
$(document).ready(function(){
    $("#field-cep").focusout(function(){
            //window.alert('Foi!!!')
            var cep = $("#field-cep").val();
            cep = cep.replace("-", "");
 
            var urlStr = "https://viacep.com.br/ws/"+ cep +"/json/";
         
            $.ajax({
                url : urlStr,
                type : "get", //requisição do tipo get 
                dataType : "json", //tipo de retorno de dados
                success : function(data){
                    console.log(data); //retorna o conteúdo
                     
                    $("#field-cidade").val(data.localidade);
                    $("#field-estado").val(data.uf);
                    $("#field-bairro").val(data.bairro);
                    $("#field-rua").val(data.logradouro);
                },
                error : function(erro){
                    console.log(erro);
                }
            });
    });
});

