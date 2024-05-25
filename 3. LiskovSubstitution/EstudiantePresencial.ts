import { Estudiante } from './Estudiante';

// Subclase para representar un estudiante presencial

export class EstudiantePresencial extends Estudiante {
    constructor(
        id: number,
        nombre: string
    ) {
        super(id, nombre, 'Presencial');
    }

    // Métodos específicos para estudiantes presenciales
    asistirClase(): void {
        console.log(`${this.nombre} está asistiendo a clase en el campus.`);
    }
}
