import { EstudianteInterface } from './EstudianteInterface';

// Clase que implementa las funcionalidades de un estudiante
export class Estudiante implements EstudianteInterface {
    entregarTarea(): void {
        console.log("Tarea entregada.");
    }

    verNotas(): void {
        console.log("Notas obtenidas.");
    }
}
