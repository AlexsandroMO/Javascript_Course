//Class1 - Write on screen


    window.alert('Atenção!')
    window.confirm('Está gostando de JS?')
    window.prompt('Qual é o seu nome?')

//Class2 - Inteirando Variáveis

    //window.alert('Atenção!')
    //window.confirm('Está gostando de JS?')
    var nome = window.prompt('Qual é o seu nome?') //recebe string
    var num = Number.parseInt(window.prompt('Digite o Número')) //Number.parseInt converter variável pra inteiro | String(veriavel) ou variavel.toString() pode usar so Number pra ele interpretar o tipo
    var calc = num + 2.5
    window.alert(`Welcome ${nome} >> ${Number.parseFloat(calc)}`)
    //window.alert('Welcome ' + nome + ' >> ' + Number.parseFloat(calc))

//Class3 - Inteirando Variáveis Numéricas
 
    var nome = window.prompt('Qual é o seu nome?<br>') //recebe string
    document.write(`Olá ${nome}, Seu nome tem ${nome.length} letras <br>`)
    document.write(`${nome.toUpperCase()}<br>`)
    document.write(`${n.toFixed(2).replace('.',',')}<br>`)
    document.write(n.toLocaleString('pt-BR', {style:'currency', currency:'BRL'}) + '<br>')
    document.write(n.toLocaleString('pt-BR', {style:'currency', currency:'USD'}) + '<br>')
    document.write(n.toLocaleString('pt-BR', {style:'currency', currency:'EUR'}) + '<br>')
    document.write(n.toLocaleString('pt-BR', {style:'currency', currency:'BTC'}))
    //console.log(n.toLocaleString('en-US', {style:'currency', currency:'USD'}));
    //window.alert('Welcome ' + nome + ' >> ' + Number.parseFloat(cal
   
//Class4 - DOM
   

    window.document.write('Olá Mundo!<br>')
    window.document.write(window.navigator.appName)
    window.document.write('<br>')
    window.document.write(window.document.URL)
    window.document.write('<br>')
    window.document.write('<br>')
    window.document.write('<br>')

    var p1 = window.document.getElementsByTagName('p')[0]
    var corpo = window.document.body
    var d = window.document.getElementById('msg')
    var c = window.document.querySelector('div#msg')

    window.document.write(p1.innerText)
    window.document.write('<br>')
    window.document.write(d.innerText)


    p1.style.color = 'red'
    corpo.style.background = 'black'
    d.style.background = 'green'
    d.innerText = 'Mudou tudo'
    c.style.background = 'yellow'
    
//Class5 - Interagindo com as classes
    
    var a = window.document.getElementById('area')
        a.addEventListener('click', clicar)
        a.addEventListener('mouseenter', entrar)
        a.addEventListener('mouseout', sair)

        function clicar(){
            
            a.innerText = 'Clicou!'
            a.style.background = 'red'
        }
        function entrar(){
            a.innerText = 'Entrou'
            a.style.background = 'rgb(184, 196, 27)'
        }
        function sair(){
            a.innerText = 'Saiu'
            a.style.background = 'blue'
        }
        //window.document.write('<br>Olá Mundo!<br>')
    
//Class6 - ICriando uma Calculadora

    var tn1 = document.getElementById('txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var res = window.document.getElementById('res')

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2

    //console.log(tn1)
    //alert(tn1.value)
    //alert(tn2.Value)
    //document.write(s.toFixed(2).replace('.',',').toLocaleString('pt-BR', {style:'currency', currency:'BRL'}))

    res.innerHTML = `A soma entre ${n1.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} e ${n2.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} é igual a ${s.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`
    }
    //var.toFixed(2).replace('.',',')
   
