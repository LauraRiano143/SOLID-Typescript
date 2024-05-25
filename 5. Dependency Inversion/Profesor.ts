import { ProfesorInterface } from './ProfesorInterface';

// Clase concreta que implementa las funcionalidades de un profesor
export class Profesor implements ProfesorInterface {
    enseñar(curso: string): void {
        console.log(`El profesor está enseñando el curso de ${curso}`);
    }
}
