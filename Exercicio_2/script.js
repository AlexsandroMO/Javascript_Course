//alert('Olá!')

function verificar(){
    //window.alert('Foi!')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', 'img/menino.png')
            }
            else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'img/jovem-menino.png')
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'img/homem.png')
            }
            else{
                //Idoso
                img.setAttribute('src', 'img/senhor.png')
            }
            document.body.style.background = '#81BEF7'
        }

        else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', 'img/menina.png')
            }
            else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'img/jovem-menina.png')
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'img/mulher.png')
            }
            else{
                //Idosa
                img.setAttribute('src', 'img/senhora.png')
            }
            document.body.style.background = '#F6CEF5'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Sexo: ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}