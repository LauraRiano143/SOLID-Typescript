"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
// Clase concreta que implementa las funcionalidades de un profesor
var Profesor = /** @class */ (function () {
    function Profesor() {
    }
    Profesor.prototype.enseñar = function (curso) {
        console.log("El profesor est\u00E1 ense\u00F1ando el curso de ".concat(curso));
    };
    return Profesor;
}());
exports.Profesor = Profesor;
