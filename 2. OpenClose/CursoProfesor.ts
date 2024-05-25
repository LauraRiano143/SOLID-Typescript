import { Curso } from './Curso';

// Clase que extiende Curso y agrega el atributo de profesor
export class CursoConProfesor extends Curso {
  constructor(
    id: number,
    titulo: string,
    descripcion: string,
    public profesor: string // Nuevo atributo profesor
  ) {
    super(id, titulo, descripcion);
  }

}
