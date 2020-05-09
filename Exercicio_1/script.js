//alert('Olá!')

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 1
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'img/dia.png'
        document.body.style.background = '#ba9e6c'
    }
    else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'img/tarde.png'
        document.body.style.background = '#3974b6'
    }
    else{
        //Boa noite
        img.src = 'img/noite.png'
        document.body.style.background = '#0e222e'
    }
}