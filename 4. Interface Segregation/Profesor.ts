import { ProfesorInterface } from './ProfesorInterface';

// Clase que implementa las funcionalidades de un profesor
export class Profesor implements ProfesorInterface {
    asignarTarea(): void {
        console.log("Tarea asignada.");
    }

    calificarTarea(): void {
        console.log("Tarea calificada.");
    }
}
