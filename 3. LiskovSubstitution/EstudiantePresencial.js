"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudiantePresencial = void 0;
var Estudiante_1 = require("./Estudiante");
// Subclase para representar un estudiante presencial
var EstudiantePresencial = /** @class */ (function (_super) {
    __extends(EstudiantePresencial, _super);
    function EstudiantePresencial(id, nombre) {
        return _super.call(this, id, nombre, 'Presencial') || this;
    }
    // Métodos específicos para estudiantes presenciales
    EstudiantePresencial.prototype.asistirClase = function () {
        console.log("".concat(this.nombre, " est\u00E1 asistiendo a clase en el campus."));
    };
    return EstudiantePresencial;
}(Estudiante_1.Estudiante));
exports.EstudiantePresencial = EstudiantePresencial;
