"use strict";
//SEGREGACIÓN DE INTERFACES
Object.defineProperty(exports, "__esModule", { value: true });
//Define una interfaz ProfesorInterface que representa las funcionalidades que puede realizar 
//un profesor en la universidad, como asignar y calificar tareas.
//Define una interfaz EstudianteInterface que representa las funcionalidades que puede realizar 
//un estudiante en la universidad, como entregar tareas y ver notas.
//Implementa la interfaz ProfesorInterface en la clase Profesor, proporcionando las implementaciones 
//concretas de las funcionalidades del profesor, como asignar y calificar tareas.
//Implementa la interfaz EstudianteInterface en la clase Estudiante, proporcionando las implementaciones 
//concretas de las funcionalidades del estudiante, como entregar tareas y ver notas.
var Profesor_1 = require("./Profesor");
var Estudiante_1 = require("./Estudiante");
// Clase principal que relaciona todas las clases
var Universidad = /** @class */ (function () {
    function Universidad() {
        this.profesor = new Profesor_1.Profesor();
        this.estudiante = new Estudiante_1.Estudiante();
    }
    // Métodos que relacionan las clases
    Universidad.prototype.ejecutarAcciones = function () {
        this.profesor.asignarTarea();
        this.profesor.calificarTarea();
        this.estudiante.entregarTarea();
        this.estudiante.verNotas();
    };
    return Universidad;
}());
// Crear una instancia de la Universidad y ejecutar acciones
var universidad = new Universidad();
universidad.ejecutarAcciones();
