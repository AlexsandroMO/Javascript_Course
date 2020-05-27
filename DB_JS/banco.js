window.addEventListener('load', carregado);

//var db = openDatabase("myDB", "1.0", "TiPS Database Example", 2 * 4048 * 4048);
var db = openDatabase("myDB2", "2.0", "Mybase", 4048 );

function carregado(){    
    
    document.getElementById('btn-salvar').addEventListener('click', salvar);
    document.getElementById('btn-deletar').addEventListener('click', deletar);
    //document.getElementById('btn-mostrar').addEventListener('click', mostrar);
    
    db.transaction(function(tx) {
        //tx.executeSql("DROP TABLE myTable" );
        //tx.executeSql('DROP DATABASE myDB');
        tx.executeSql("CREATE TABLE IF NOT EXISTS myTable (id INTEGER PRIMARY KEY,nome TEXT,idade TEXT, cep TEXT, cidade TEXT, estado TEXT, bairro TEXT, rua TEXT, numero TEXT, email TEXT, senha TEXT)");
//        tx.executeSql('INSERT INTO myTable ( nome,senha,email) VALUES ("a", "b", "c")');
    });
    
    mostrar();
    
}   

function salvar(){

    var id = document.getElementById('field-id').value;
    var nome = document.getElementById('field-name').value;
    var idade = document.getElementById('field-idade').value;
    var cep = document.getElementById('field-cep').value;
    var cidade = document.getElementById('field-cidade').value;
    var estado = document.getElementById('field-estado').value;
    var bairro = document.getElementById('field-bairro').value;
    var rua = document.getElementById('field-rua').value;
    var numero = document.getElementById('field-numero').value;
    var mail = document.getElementById('field-mail').value;
    var pass = document.getElementById('field-pass').value;

    db.transaction(function(tx) {
        
        if(id){
            
            tx.executeSql('UPDATE myTable SET nome=?, idade=?, cep=?, cidade=?, estado=?, bairro=?, rua=?, numero=?, email=? senha=? WHERE id=?', [nome,idade,cep,cidade,estado,bairro,rua,numero,mail,pass,id],null);
        }else{
            //window.alert("Aqui!!!")
            tx.executeSql('INSERT INTO myTable (nome,idade,cep,cidade,estado,bairro,rua,numero,email,senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [nome,idade,cep,cidade,estado,bairro,rua,numero,mail,pass]);
        }
    });

    mostrar();
    limpaCampo();
    inputSHOW(false);
}

function mostrar(){  
    //window.alert("Aqui!!!")      
    var table = document.getElementById('tbody-register');

    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM myTable', [], function (tx, resultado) {
            var rows = resultado.rows;
            var tr = '';
            for(var i = 0; i < rows.length; i++){
                    tr += '<tr>';
                    tr += '<td onClick="atualizar(' + rows[i].id + ')">' + rows[i].nome + '</td>';
                    tr += '<td>' + rows[i].idade + '</td>';
                    tr += '<td>' + rows[i].cep + '</td>';
                    tr += '<td>' + rows[i].cidade + '</td>';
                    tr += '<td>' + rows[i].estado + '</td>';
                    tr += '<td>' + rows[i].bairro + '</td>';
                    tr += '<td>' + rows[i].rua + '</td>';
                    tr += '<td>' + rows[i].numero + '</td>';
                    tr += '<td>' + rows[i].email + '</td>';
                    tr += '<td>' + rows[i].senha + '</td>';
                    tr += '</tr>';  
            }
                table.innerHTML = tr; 

        }, null);
    });
}

function atualizar(_id){   
    
    var id = document.getElementById('field-id');
    var nome = document.getElementById('field-name');
    var idade = document.getElementById('field-idade');
    var cep = document.getElementById('field-cep');
    var cidade = document.getElementById('field-cidade');
    var estado = document.getElementById('field-estado');
    var bairro = document.getElementById('field-bairro');
    var rua = document.getElementById('field-rua');
    var numero = document.getElementById('field-numero');
    var mail = document.getElementById('field-mail');
    var pass = document.getElementById('field-pass');
    
    id.value = _id;
    
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM myTable WHERE id=?', [_id], function (tx, resultado) {
            var rows = resultado.rows[0];

            nome.value = rows.nome ;
            idade.value = rows.idade ;
            cep.value = rows.cep ;
            cidade.value = rows.cidade ;
            estado.value = rows.estado ;
            bairro.value = rows.bairro ;
            rua.value = rows.rua ;
            numero.value = rows.numero ;
            mail.value = rows.email ;
            pass.value = rows.senha ;
        });
    });
    inputSHOW(true);
}

function deletar(){
    
    var id = document.getElementById('field-id').value;
    
    db.transaction(function(tx) {
        tx.executeSql("DELETE FROM myTable WHERE id=?", [id]);
    });
    
    mostrar();
    limpaCampo();
    inputSHOW(false);
}


$(document).keypress(function(e) {
    if (e.which == 17) {
        if(e.which == 17){
            deletarDB()
        }
    }

    });


function deletarDB(){
        db.transaction(function (tx) {
            tx.executeSql('DROP TABLE mytable');
          });
    } 



