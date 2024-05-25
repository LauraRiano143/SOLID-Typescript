"use strict";
//SUSTITUCIÓN DE LISKOV
Object.defineProperty(exports, "__esModule", { value: true });
var EstudiantePresencial_1 = require("./EstudiantePresencial");
var EstudianteVirtual_1 = require("./EstudianteVirtual");
// Función que recibe cualquier tipo de estudiante y muestra sus detalles
function mostrarDetallesEstudiante(estudiante) {
    console.log(estudiante.obtenerDetalles());
    // Se puede llamar al método específico dependiendo del tipo de estudiante
    if (estudiante instanceof EstudiantePresencial_1.EstudiantePresencial) {
        estudiante.asistirClase();
    }
    else if (estudiante instanceof EstudianteVirtual_1.EstudianteVirtual) {
        estudiante.accederPlataformaOnline();
    }
}
// Crear instancias de diferentes tipos de estudiantes
var estudiantePresencial = new EstudiantePresencial_1.EstudiantePresencial(1, 'Mateo');
var estudianteVirtual = new EstudianteVirtual_1.EstudianteVirtual(2, 'María');
// Llamar a la función con diferentes tipos de estudiantes
mostrarDetallesEstudiante(estudiantePresencial);
mostrarDetallesEstudiante(estudianteVirtual);
