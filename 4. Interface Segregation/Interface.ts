//SEGREGACIÓN DE INTERFACES

//Define una interfaz ProfesorInterface que representa las funcionalidades que puede realizar 
//un profesor en la universidad, como asignar y calificar tareas.

//Define una interfaz EstudianteInterface que representa las funcionalidades que puede realizar 
//un estudiante en la universidad, como entregar tareas y ver notas.

//Implementa la interfaz ProfesorInterface en la clase Profesor, proporcionando las implementaciones 
//concretas de las funcionalidades del profesor, como asignar y calificar tareas.

//Implementa la interfaz EstudianteInterface en la clase Estudiante, proporcionando las implementaciones 
//concretas de las funcionalidades del estudiante, como entregar tareas y ver notas.

import { Profesor } from './Profesor';
import { Estudiante } from './Estudiante';

// Clase principal que relaciona todas las clases
class Universidad {
    private profesor: Profesor;
    private estudiante: Estudiante;

    constructor() {
        this.profesor = new Profesor();
        this.estudiante = new Estudiante();
    }

    // Métodos que relacionan las clases
    ejecutarAcciones(): void {
        this.profesor.asignarTarea();
        this.profesor.calificarTarea();

        this.estudiante.entregarTarea();
        this.estudiante.verNotas();
    }
}

// Crear una instancia de la Universidad y ejecutar acciones
const universidad = new Universidad();
universidad.ejecutarAcciones();
