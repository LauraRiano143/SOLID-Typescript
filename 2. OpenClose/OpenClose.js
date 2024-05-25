"use strict";
//ABIERTO CERRADO
Object.defineProperty(exports, "__esModule", { value: true });
//La clase Curso está abierta para la extensión, lo que significa que se pueden crear nuevas subclases 
//para agregar funcionalidad adicional sin modificar la clase Curso original. En este caso, se creo 
//la clase CursoConProfesor que extiende Curso para agregar la información del profesor.
var Curso_1 = require("./Curso");
var CursoProfesor_1 = require("./CursoProfesor");
// Aquí puedes utilizar las clases según sea necesario
var cursoSinProfesor = new Curso_1.Curso(1, 'Ética', 'Asignatura obligatoría');
console.log(cursoSinProfesor);
var cursoConProfesor = new CursoProfesor_1.CursoConProfesor(2, 'Seguridad', 'Curso electivo', 'Profesor Oscar');
console.log(cursoConProfesor);
