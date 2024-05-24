"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorCursosEstudiante = void 0;
var GestorCursosEstudiante = /** @class */ (function () {
    function GestorCursosEstudiante() {
        this.cursos = [];
    }
    GestorCursosEstudiante.prototype.inscribirEnCurso = function (curso) {
        this.cursos.push(curso);
    };
    GestorCursosEstudiante.prototype.darseDeBajaDeCurso = function (curso) {
        this.cursos = this.cursos.filter(function (c) { return c.id !== curso.id; });
    };
    GestorCursosEstudiante.prototype.obtenerCursos = function () {
        return this.cursos;
    };
    return GestorCursosEstudiante;
}());
exports.GestorCursosEstudiante = GestorCursosEstudiante;
