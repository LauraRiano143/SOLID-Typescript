// Clase base para representar un estudiante
export class Estudiante {
    constructor(
        public id: number,
        public nombre: string,
        public tipo: string // Tipo de estudiante: Presencial o Virtual
    ) {}

    // Método para obtener los detalles del estudiante
    obtenerDetalles(): string {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Tipo: ${this.tipo}`;
    }
}
