import { Estudiante } from './Estudiante';

// Subclase para representar un estudiante virtual
export class EstudianteVirtual extends Estudiante {
    constructor(
        id: number,
        nombre: string
    ) {
        super(id, nombre, 'Virtual');
    }

    // Métodos específicos para estudiantes virtuales
    accederPlataformaOnline(): void {
        console.log(`${this.nombre} está accediendo a la plataforma virtual.`);
    }
}
