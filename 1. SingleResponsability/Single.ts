//RESPONSABILIDAD ÚNICA

//Este principio establece que una clase debe tener una sola razón para cambiar, 
//es decir, una clase debe tener una única responsabilidad.


// Importamos las clases desde sus respectivos archivos
import { InformacionEstudiante } from './InfoEstudiante';
import { Curso } from './Curso';
import { GestorCursosEstudiante } from './GestorCursoEstudiante';

// Creamos una instancia de InformacionEstudiante con los datos de un estudiante
const infoEstudiante = new InformacionEstudiante(1, 'Juan Pérez', 'juan.perez@ejemplo.com');

// Creamos una instancia de GestorCursosEstudiante para manejar los cursos del estudiante
const gestorCursos = new GestorCursosEstudiante();

// Creamos instancias de dos cursos
const curso1 = new Curso(101, 'Matemáticas', 'Un curso introductorio de Matemáticas');
const curso2 = new Curso(102, 'Física', 'Un curso introductorio de Física');

// Inscribimos al estudiante en los dos cursos
gestorCursos.inscribirEnCurso(curso1);
gestorCursos.inscribirEnCurso(curso2);

// Imprimimos los detalles del estudiante
infoEstudiante.imprimirDetallesEstudiante();

// Imprimimos los cursos en los que el estudiante está inscrito
console.log("Cursos inscritos:");
console.log(gestorCursos.obtenerCursos());
