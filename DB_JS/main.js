window.addEventListener('load',carrega);

//inputSHOW(_show)

function carrega(){
    document.getElementById('field-name').addEventListener('blur', leave);
    document.getElementById('field-idade').addEventListener('blur', leave);
    document.getElementById('field-cep').addEventListener('blur', leave);
    document.getElementById('field-cidade').addEventListener('blur', leave);
    document.getElementById('field-estado').addEventListener('blur', leave);
    document.getElementById('field-bairro').addEventListener('blur', leave);
    document.getElementById('field-rua').addEventListener('blur', leave);
    document.getElementById('field-numero').addEventListener('blur', leave);
    document.getElementById('field-mail').addEventListener('blur', leave); 
    document.getElementById('field-pass').addEventListener('blur', leave);
    document.getElementById('field-pass2').addEventListener('blur', leave);   
}
function leave(){
    if(this.value != ''){
        this.offsetParent.className += " ativo";
    }else{
        //this.offsetParent.className = 'form-group';
        this.offsetParent.className = 'box';
    }
}

function inputSHOW(_show){
    if(_show){
        document.getElementById('field-name').offsetParent.className += " ativo";
        document.getElementById('field-idade').offsetParent.className += " ativo";
        document.getElementById('field-cep').offsetParent.className += " ativo";
        document.getElementById('field-cidade').offsetParent.className += " ativo";
        document.getElementById('field-bairro').offsetParent.className += " ativo";
        document.getElementById('field-estado').offsetParent.className += " ativo";
        document.getElementById('field-rua').offsetParent.className += " ativo";
        document.getElementById('field-numero').offsetParent.className += " ativo";
        document.getElementById('field-mail').offsetParent.className += " ativo";
        document.getElementById('field-pass').offsetParent.className += " ativo";
        document.getElementById('field-pass2').offsetParent.className += " ativo";
        document.getElementById('btn-deletar').style.display = 'block';

    }else{
        
        document.getElementById('field-name').offsetParent.className = 'box';
        document.getElementById('field-idade').offsetParent.className = 'box';
        document.getElementById('field-cep').offsetParent.className = 'box';
        document.getElementById('field-cidade').offsetParent.className = 'box';
        document.getElementById('field-estado').offsetParent.className = 'box';
        document.getElementById('field-bairro').offsetParent.className = 'box';
        document.getElementById('field-rua').offsetParent.className = 'box';
        document.getElementById('field-numero').offsetParent.className = 'box';
        document.getElementById('field-mail').offsetParent.className = 'box';
        document.getElementById('field-pass').offsetParent.className = 'box';
        document.getElementById('field-pass2').offsetParent.className = 'box';
        //document.getElementById('btn-deletar').style.display = 'none';
    }
}

function limpaCampo(){
    
    document.getElementById('field-id').value = '';
    document.getElementById('field-name').value = '';
    document.getElementById('field-idade').value = '';
    document.getElementById('field-cep').value = '';
    document.getElementById('field-cidade').value = '';
    document.getElementById('field-estado').value = '';
    document.getElementById('field-bairro').value = '';
    document.getElementById('field-rua').value = '';
    document.getElementById('field-numero').value = '';
    document.getElementById('field-mail').value = '';
    document.getElementById('field-pass').value = '';
    document.getElementById('field-pass2').value = '';
}

















/* 
function validation(){


    var json =({ "emailUser": email, "passwordUser": passWord });
   console.log(json); 

   xhr.open("POST", "https://domain/api/compare", true);

   xhr.setRequestHeader("Content-Type", "application/json");
   xhr.send(json);

   if(xhr.readyState == 4 && xhr.status == 200){
       var response1 = JSON.parse(xhr.responseText);

   }
} */

//window.alert(validation())