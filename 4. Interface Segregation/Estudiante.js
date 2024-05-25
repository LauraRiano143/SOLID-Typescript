"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
// Clase que implementa las funcionalidades de un estudiante
var Estudiante = /** @class */ (function () {
    function Estudiante() {
    }
    Estudiante.prototype.entregarTarea = function () {
        console.log("Tarea entregada.");
    };
    Estudiante.prototype.verNotas = function () {
        console.log("Notas obtenidas.");
    };
    return Estudiante;
}());
exports.Estudiante = Estudiante;
