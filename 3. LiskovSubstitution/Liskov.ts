//SUSTITUCIÓN DE LISKOV

//Define la clase base Estudiante, que tiene propiedades comunes a todos los estudiantes 
//y un método para obtener sus detalles.

//Define la subclase EstudiantePresencial, que extiende Estudiante y agrega el comportamiento 
//específico para estudiantes presenciales.

//Define la subclase EstudianteVirtual, que extiende Estudiante y agrega el comportamiento 
//específico para estudiantes virtuales.

//Importa las clases necesarias, crea instancias de diferentes tipos de estudiantes y demuestra 
//cómo la función mostrarDetallesEstudiante() puede aceptar cualquier tipo de estudiante y utilizar 
//su comportamiento específico sin cambiar su lógica interna, cumpliendo así con el principio de 
//sustitución de Liskov (LSP).

import { Estudiante } from './Estudiante';
import { EstudiantePresencial } from './EstudiantePresencial';
import { EstudianteVirtual } from './EstudianteVirtual';

// Función que recibe cualquier tipo de estudiante y muestra sus detalles
function mostrarDetallesEstudiante(estudiante: Estudiante): void {
    console.log(estudiante.obtenerDetalles());

    // Se puede llamar al método específico dependiendo del tipo de estudiante
    if (estudiante instanceof EstudiantePresencial) {
        estudiante.asistirClase();
    } else if (estudiante instanceof EstudianteVirtual) {
        estudiante.accederPlataformaOnline();
    }
}

// Crear instancias de diferentes tipos de estudiantes
const estudiantePresencial = new EstudiantePresencial(1, 'Mateo');
const estudianteVirtual = new EstudianteVirtual(2, 'María');

// Llamar a la función con diferentes tipos de estudiantes
mostrarDetallesEstudiante(estudiantePresencial);
mostrarDetallesEstudiante(estudianteVirtual);
