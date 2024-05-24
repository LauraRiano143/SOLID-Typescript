//Clase para gestionar los cursos

import { Curso } from './Curso';

export class GestorCursosEstudiante {
  private cursos: Curso[] = [];

  inscribirEnCurso(curso: Curso): void {
    this.cursos.push(curso);
  }

  darseDeBajaDeCurso(curso: Curso): void {
    this.cursos = this.cursos.filter(c => c.id !== curso.id);
  }

  obtenerCursos(): Curso[] {
    return this.cursos;
  }
}

  
  