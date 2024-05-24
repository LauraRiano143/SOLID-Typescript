//Clase para la información del estudiante

export class InformacionEstudiante {
    constructor(
      public id: number,
      public nombre: string,
      public correo: string
    ) {}
  
    imprimirDetallesEstudiante(): void {
      console.log(`ID: ${this.id}, Nombre: ${this.nombre}, Correo: ${this.correo}`);
    }
  }
  