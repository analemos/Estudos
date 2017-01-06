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

//aula 37 - This

/*
    quando criamos uma função, devemos lembrar que um contexto de execução também é criado.
*/


function teste1(){
    console.log(this); //this nesse caso faz referenciao ao global context = window
    this.newVariable = 'hi!'; //newVariable foi criada no contexto global, por isso nao fica dentro de window
}



function teste2(){
    console.log(this); //this nesse caso faz referenciao ao global context = window
}
teste1();
teste2();
console.log(newVariable);

var teste3 = {
    name: 'the teste3 object',
    log: function(){
        this.name = 'updated name'; //este this aponta para o objeto teste3, pois esta dentro da função log
        console.log(this);
        
        //quando este contexto de execução é criado, mesmo estando dentro de log(), o this faz referencia ao contexto global.
        //dessa maneira, o nome modificado é apenas visto dentro do global context objetc = window.
        //parece estranho, mas é o jeito que o JS funciona! 
        //para sanar esse problema, olhar o objeto teste 4
        var setname = function(newname){
            this.name = newname;
        }
        setname('updated again')
        console.log(this);
    }
    
}

var teste4 = {
    name: 'nome teste4',
    log: function(){
        //Dessa maneira sabemos a qual objeto estamos nos referindo. Fica menos confuso! :)
        var self = this;
        
        var setname = function(newname){
            self.name = newname;
        }
        setname('novo nome');
        console.log(self);
    }
}

teste3.log();
teste4.log();


//AULA 39 - ARGUMENTS
/*
    arguments são os parametros que são passados para uma função
    é tb uma palavra reservada para que possamos obter um 'array' com os argumentos passados em uma função
    SPREAD argument - uma nova maneira de passar argumentos, sem defini-los
*/


function cadastro(nome, pais, idioma = 'en'){
        
    if(arguments.length === 0){
        console.log('missing parameters');
        return; 
    }
    //idioma = idioma || 'en'; =>opçao para browsers que não suportam a definição padrao por parametro
    console.log(nome);
    console.log(pais);
    console.log(idioma);
    console.log(arguments);
    console.log('--------------');
}

cadastro(); //em JS podemos chamar uma função e não passar seus argumentos (que serão undefined)
cadastro('ana'); // podemos passar parte dos argumentos

//spread arguments - coloque todos os outros parametros dentro do array other

function cadastroSimples(nome, ...other){
    console.log(nome);
    console.log(other);
    console.log(other.length);    
    console.log(arguments);
}

cadastroSimples('ana', '25', 'solteira');


//Aula 44 - IIFE - Immediately Invoked Function Expressios

//using a function expression

var greetFunc = function(name){
    console.log('hello ' + name);
};

greetFunc('ana');

//using IIFE

var greetFunc2 = function(name){
   // console.log('hello ' + name);
    return 'hello ' + name; 
}('paula');

console.log(greetFunc2);

var firstname = 'diogo';

(
    function(name){
        var greeting = 'hello';
        console.log(greeting + ' ' + name);
    }(firstname) // (firstname) pode ser colocado dentro ou fora dos parenteses. Escolher uma maneira de utilizá-lo e ser consistente! :)
);

console.log(greeting);


//Aula 45: IIFEs and safe code

//Vamos aproveitar a função acima. Olhar tb o arquivo greet.js
//perceba que o codigo acima consegue identificar a var greeting no arquivo greet.js = hola
//existe uma maneira de tornar uma variavel global;

(
    function(global, name){
        var greeting = 'hello';
        global.greeting = 'hello'; //independete do valor colocado em greet.js, agora fazemos com que greeting seja enxergada globalmente.
        console.log(greeting + ' ' + name);
    }(window, firstname) // (firstname) pode ser colocado dentro ou fora dos parenteses. Escolher uma maneira de utilizá-lo e ser consistente! :)
);

console.log(greeting);

















