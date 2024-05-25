"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
// Clase que implementa las funcionalidades de un profesor
var Profesor = /** @class */ (function () {
    function Profesor() {
    }
    Profesor.prototype.asignarTarea = function () {
        console.log("Tarea asignada.");
    };
    Profesor.prototype.calificarTarea = function () {
        console.log("Tarea calificada.");
    };
    return Profesor;
}());
exports.Profesor = Profesor;
