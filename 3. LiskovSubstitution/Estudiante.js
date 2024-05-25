"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
// Clase base para representar un estudiante
var Estudiante = /** @class */ (function () {
    function Estudiante(id, nombre, tipo // Tipo de estudiante: Presencial o Virtual
    ) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
    }
    // Método para obtener los detalles del estudiante
    Estudiante.prototype.obtenerDetalles = function () {
        return "ID: ".concat(this.id, ", Nombre: ").concat(this.nombre, ", Tipo: ").concat(this.tipo);
    };
    return Estudiante;
}());
exports.Estudiante = Estudiante;
