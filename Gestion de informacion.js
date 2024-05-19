// Crear un objeto persona con propiedades básicas.

let persona = {
    name: 'Juan',
    lastName: 'Perez',
    age: 34,
    profesion: 'Programador',

    // Añadir un objeto anidado dentro de persona.

    identificacion : {
        DNI: 1234567,
        country: 'Mexico',
    },
};

// Acceder y mostrar propiedades del objeto.

console.log(persona.name);

console.log(persona['age']);

// Agregar y eliminar propiedades del objeto.

persona.phone = '123456789';

delete persona.identificacion.DNI;

// Usar la destructuración para acceder a propiedades.

let { name, lastName, age, profesion, identificacion: { DNI, country}} = persona;

// Congelar el objeto para evitar cambios.

let persona2 = {
    nombre: 'Ana',
    peso: 1.80,
    edad: 25,
};

// Object.freeze(persona2);

// Sellar el objeto para permitir modificaciones pero no agregar ni eliminar

Object.seal(persona2);

// Modificacion 

persona2.edad = 23;
console.log(persona2);

// Agregar una nueva propiedad

persona2.profesion = "Doctora";
console.log(persona2.profesion);

// Eliminar una propiedad

delete persona2.peso;
console.log(persona2.peso);

// Unir dos objetos usando Object.assign y el operador spread.

// Object.assign

const Union = Object.assign(persona, persona2);

console.log(Union);

// operador spread

const Union2 = { ...persona, ...persona2};

console.log(Union2);

// Usar this dentro de un método del objeto.

const persona3 = {
    nombre : 'Alex',
    apellido : 'Cueva',
    fullName(){
        return `Hola me llamo ${this.nombre} ${this.apellido}`;
    }
}

console.log(persona3.fullName());

// Recorrer el objeto usando Object.keys, Object.values y Object.entries.

// Object.keys

console.log(Object.keys(persona));

// Object.values

console.log(Object.values(persona));

// Object.entries

console.log(Object.entries(persona));

// Usar funciones con parámetros y con devolución (return)

function Numeros(num1, num2) {
    if (num1 > num2) {
        return `${num1} es mayor que ${num2}`;
    } else if (num1 < num2) {
        return `${num1} es menor que ${num2}`;
    } else {
        return `${num1} es igual a ${num2}`;
    }
}

console.log(Numeros(5, 2));

console.log(Numeros(2, 5));

console.log(Numeros(2, 2));
