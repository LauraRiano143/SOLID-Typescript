"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importamos las clases desde sus respectivos archivos
var InfoEstudiante_1 = require("./InfoEstudiante");
var Curso_1 = require("./Curso");
var GestorCursoEstudiante_1 = require("./GestorCursoEstudiante");
// Creamos una instancia de InformacionEstudiante con los datos de un estudiante
var infoEstudiante = new InfoEstudiante_1.InformacionEstudiante(1, 'Juan Pérez', 'juan.perez@ejemplo.com');
// Creamos una instancia de GestorCursosEstudiante para manejar los cursos del estudiante
var gestorCursos = new GestorCursoEstudiante_1.GestorCursosEstudiante();
// Creamos instancias de dos cursos
var curso1 = new Curso_1.Curso(101, 'Matemáticas', 'Un curso introductorio de Matemáticas');
var curso2 = new Curso_1.Curso(102, 'Física', 'Un curso introductorio de Física');
// Inscribimos al estudiante en los dos cursos
gestorCursos.inscribirEnCurso(curso1);
gestorCursos.inscribirEnCurso(curso2);
// Imprimimos los detalles del estudiante
infoEstudiante.imprimirDetallesEstudiante();
// Imprimimos los cursos en los que el estudiante está inscrito
console.log("Cursos inscritos:");
console.log(gestorCursos.obtenerCursos());
