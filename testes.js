
// Valor retornado: "Script é na DevMedia!"
stringExemplo = "JavaScript é na DevMedia!";
resultado1 = stringExemplo.substring(4);
  
// Valor retornado: "Aprenda a utilizar"
stringExemplo = "substring(): Aprenda a utilizar na DevMedia!";
resultado2 = stringExemplo.substring(13, 31);
  
// Valor retornado: "subs"
stringExemplo = "substring(): Aprenda a utilizar na DevMedia!";
resultado3 = stringExemplo.substring(4, -5);
  
// Valor retornado: "subs"
stringExemplo = "substring(): Aprenda a utilizar na DevMedia!";
resultado4 = stringExemplo.substring(4, 0);
  
// Valor retornado: "Texto em destaque"
htmlExemplo = "<b>Texto em destaque</b>";
resultado5 = htmlExemplo.substring(3, htmlExemplo.length - 4);
  
// Valor retornado: "devmedia.com.br"
emailExemplo = "exemplo@devmedia.com.br";
resultado6 = emailExemplo.substring(emailExemplo.indexOf("@") + 1);


stringExemplo = "JavaScript é na DevMedia";
resultado = stringExemplo.substring(0, 10);

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)
console.log(resultado5)
console.log(resultado6)
console.log(resultado)

var stringExemplo = "Aprendendo JavaScript na DevMedia!";
console.log('\n')
console.log(stringExemplo.indexOf("DevMedia"))
console.log(stringExemplo.indexOf("en", 4))
console.log(stringExemplo.indexOf("Java", -8))
console.log(stringExemplo.indexOf(".NET"))
console.log(stringExemplo.indexOf("a"))

let listaVazia = [];
let listaNumero = [1, 2, 3, 4, 55, 66, 777];
let listaPalavras = ["ola", "mundo", "mundojs", "batata"];
let listaMista = [1, "ola", true, [111,222,333], 1.345];

console.log('\n')
console.log(listaVazia);
console.log(listaNumero);
console.log(listaPalavras);
console.log(listaMista);
