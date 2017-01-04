/*
    Objetos = Funções

    Tipos de propriedades
    
    - Primitivas
    - Objetc
    - Function Method
    
    Cada objeto criado pode ter uma dessas propriedades. Sendo que cada uma delas fica aloca um espaço em memória.
    
*/

//Exemplo - Primitive property
var person = new Object();

//[] = computer member access
person["firstName"] = "Ana";
person["lastName"] = "Lemos";


var firstNameProperty = 'firstName';

console.log(person);
console.log(person["firstName"]);
console.log(person[firstNameProperty]); 
//"." = member access
console.log(person.firstName);


//Object Literal - mais rápido
var Ana = {
    firstName: 'Paula', 
    lastName: 'Lemos',
    address: {
        street: 'teste',
        city: 'teste2'
    }
};
//console.log(person2);

function greet(person){
    console.log('Hi ' + person.firstName);
}
greet(Ana);

//Faking namespaces = container para separar objetos e vars que possuem o mesmo nome

var english = {};
var spanish = {};

english.greet = 'hello';
spanish.greet = 'hola';

console.log(english);

//Transformando objectLiteral em json e vice-versa

var objectLiteral = {
    firstName: 'John',
    isAProgrammer: true 
}

console.log(JSON.stringify(objectLiteral)); //transforma em json

var jsonValue = JSON.parse('{"firstName":"elton", "isAProgrammer": true}');

console.log(jsonValue); //transforma em um objeto


//Functions are objects

function greet(){console.log('hi');}

greet.language = 'english';

//cria um enviroment context = imprime o código e não o seu resultado
console.log(greet);
console.log(greet.language);

// uma expressão retorna um valor. A função abaixo é uma expressao. Quando o global enviroment context é gerado,
// ele 'varre o código'. Sendo assim, as variáveis são definidas como undefined e as funções ficam armazenadas em memória.
//por isso, podemos chamar greet() e receber o valor correto

greet();
function greet(){console.log('oi');}

//funçoes anonimas sao expressoes; Quando criamos uma função anonima, esta é colocado em uma variável.
//Sendo assim, só podemos chamá-la após a sua declaração, do contrário retornará undefined

//funcaoAnonima(); //da erro = variaveis são inicializadas como undefined
var funcaoAnonima = function(){console.log('olá');}
funcaoAnonima();

//Funçoes passadas como parametro

function log(a){
    a();
}

log(
    function(){
        console.log('ola, mundo!');
    }
);

//Aula 35

//by value - cria uma cópia e consequentemente um novo endereço de memória para aquele valor.

var a = 3; //primitive type
var b;
b = a; //cria uma cópia e novo endereço na memória.

console.log(a);
console.log(b);
//modificar o valor de a não impacta b pois os valores estão em endereços de memória distintos.
a = 5; 

console.log(a);
console.log(b);


//by reference (all objects including functions) - aponta para o mesmo endereço de memória ao invés de criar uma cópia

var c = {greeting: 'hi'};
var d;

d = c;
console.log(c);
console.log(d);

c.greeting = 'hello'; //mutate
console.log(c);
console.log(d);

//by reference even as parameters
function changing(obj){
    obj.greeting = 'hola'; //mutate
}
changing(d);
console.log(c);
console.log(d);

//equals operator sets up new memory space (new address)
c = {greeting:'teste mudança'};
console.log(c);
console.log(d);





























