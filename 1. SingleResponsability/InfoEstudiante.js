"use strict";
//Clase para la información del estudiante
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformacionEstudiante = void 0;
var InformacionEstudiante = /** @class */ (function () {
    function InformacionEstudiante(id, nombre, correo) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
    }
    InformacionEstudiante.prototype.imprimirDetallesEstudiante = function () {
        console.log("ID: ".concat(this.id, ", Nombre: ").concat(this.nombre, ", Correo: ").concat(this.correo));
    };
    return InformacionEstudiante;
}());
exports.InformacionEstudiante = InformacionEstudiante;
