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
exports.EstudianteVirtual = void 0;
var Estudiante_1 = require("./Estudiante");
// Subclase para representar un estudiante virtual
var EstudianteVirtual = /** @class */ (function (_super) {
    __extends(EstudianteVirtual, _super);
    function EstudianteVirtual(id, nombre) {
        return _super.call(this, id, nombre, 'Virtual') || this;
    }
    // Métodos específicos para estudiantes virtuales
    EstudianteVirtual.prototype.accederPlataformaOnline = function () {
        console.log("".concat(this.nombre, " est\u00E1 accediendo a la plataforma virtual."));
    };
    return EstudianteVirtual;
}(Estudiante_1.Estudiante));
exports.EstudianteVirtual = EstudianteVirtual;
