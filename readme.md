# Javascript - Objectos y Funciones

## Crear un objeto propiedades básicas.

La creación de objetos en Javascript se puede realizar de varias maneras. La forma más común es mediante la notación de objeto literal donde defines las propiedades y valores directamente dentro de llaves ' { } '.

```javascript
let persona = {
    name: 'Juan',
    lastName: 'Perez',
    age: 34,
    profesion: 'Programador',
```

## Acceder y mostrar propiedades del objeto.

Para acceder y mostrar propiedades de un objeto en Javascript simplemente usa la notación de puntos (persona.name) o la notación de corchetes (persona['age']) por ejemplo:

```javascript
console.log(persona.name);

console.log(persona['age']);
```

## Añadir un objeto anidado dentro de persona.

Para añadir un objeto anidado dentro de otro en Javascript es asignar un objeto nuevo como valor de una propiedad del objeto. Por ejemplo:

```javascript
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
```

Otra manera de añadir un objeto anidado dentro de otro en Javascript es creando primero el objeto anidado por separado y luego asignándolo como valor de la propiedad del objeto principal.

```javascript
let identificacion = {
    DNI: 1234567,
    country: 'Mexico',
};

persona.direccion = direccion;
```

## Agregar y eliminar propiedades del objeto.

Agregar valores en Javascript implica añadir nuevos elementos a estructuras de datos y eliminar valores en Javascript Elimina valores de un objeto en Javascript.

```javascript
persona.phone = '123456789'; // Agregando valor 

delete persona.identificacion.DNI; // Eliminando valor
```

## Usar la destructuración para acceder a propiedades.

La destructuración en Javascript es una forma de extraer valores de objetos o matrices y asignarlos a variables individuales de manera más facil. Para acceder a esas propiedades de un objeto mediante la destructuración, utilizamos la sintaxis de llaves {}

```javascript
let { name, lastName, age, profesion, identificacion: { DNI, country}} = persona;
```

## Congelar el objeto para evitar cambios.

congelar un objeto en Javascript es que no se puedan realizar cambios en sus propiedades existentes.

```javascript
Object.freeze(persona2);
```

## Sellar el objeto para permitir modificaciones pero no agregar ni eliminar propiedades.

Sellar un objeto en Javascript es mediante que se impide agregar o eliminar nuevas propiedades en ese objeto pero aún se permite modificar las propiedades y Esto se logra utilizando el método Object.seal()

```javascript
let persona2 = {
    nombre: 'Ana',
    peso: 1.80,
    edad: 25,
};

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
```

## Unir dos objetos usando Object.assign y el operador spread.

Para unir dos objetos en Javascript puedes utilizar tanto Object.assign() y spread.

```javascript
// Object.assign

const Union = Object.assign(persona, persona2);

console.log(Union);

// operador spread

const Union2 = { ...persona, ...persona2};

console.log(Union2);
```

## Usar this dentro de un método del objeto.

Usar this en Javascript es un método hacerreferencia al propio objeto desde dentro de ese método. this actúa como una referencia al objeto actual en el contexto que se encuentra.

```javascript
const persona3 = {
    nombre : 'Alex',
    apellido : 'Cueva',
    fullName(){
        return `Hola me llamo ${this.nombre} ${this.apellido}`;
    }
}

console.log(persona3.fullName());
```

## Recorrer el objeto usando Object.keys, Object.values y Object.entries.

En Javascript significa iterar sobre los elementos de una estructura de datos como un objeto y realizar alguna acción en cada elemento.

```javascript
// Object.keys

console.log(Object.keys(persona)); // Devuelve las propiedades 

// Object.values

console.log(Object.values(persona)); // Devuelve los valores 

// Object.entries

console.log(Object.entries(persona)); // Devuelve propiedad : valor
```

## Usar funciones con parámetros y con devolución (return)

Una función en Javascript es un bloque de código reutilizable que realiza una tareas. Puede aceptar entradas (parámetros), realizar cálculos y devolver un resultado y return en es como la respuesta que una función proporciona cuando se le solicita que realice alguna operación.

```javascript
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
```





