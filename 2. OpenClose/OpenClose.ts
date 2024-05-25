//ABIERTO CERRADO

//La clase Curso está abierta para la extensión, lo que significa que se pueden crear nuevas subclases 
//para agregar funcionalidad adicional sin modificar la clase Curso original. En este caso, se creo 
//la clase CursoConProfesor que extiende Curso para agregar la información del profesor.



import { Curso } from './Curso';
import { CursoConProfesor } from './CursoProfesor';

// Aquí puedes utilizar las clases según sea necesario
const cursoSinProfesor = new Curso(1, 'Ética', 'Asignatura obligatoría');
console.log(cursoSinProfesor);

const cursoConProfesor = new CursoConProfesor(2, 'Seguridad', 'Curso electivo', 'Profesor Oscar');
console.log(cursoConProfesor);
