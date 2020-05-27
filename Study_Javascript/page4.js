
 /*    
var objeto = {"atributo1": "valor 1", "atributo2": 23};

console.log(objeto.atributo1);

console.log(objeto['atributo2']);

 */


const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true