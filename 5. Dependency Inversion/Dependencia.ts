//INVERSION DE DEPENDENCIAS DIP

//El principio de inversión de dependencia (DIP) establece que los módulos de alto nivel no deben 
//depender de módulos de bajo nivel, sino que ambos deben depender de abstracciones. Además, las 
//abstracciones no deben depender de los detalles, sino que los detalles deben depender de las abstracciones.

//Con este diseño, tanto la clase Profesor como la clase PersonalAdministrativo dependen de las 
//interfaces ProfesorInterface y PersonalAdministrativoInterface respectivamente, en lugar de depender 
//directamente entre sí. Esto cumple con el principio de inversión de dependencia (DIP), ya que las 
//clases de alto nivel (profesores y personal administrativo) dependen de abstracciones (interfaces) 
//en lugar de depender de detalles (implementaciones concretas).

import { Profesor } from './Profesor';
import { PersonalAdministrativo } from './PersonalAdministrativo';

// Creamos instancias de Profesor y PersonalAdministrativo
const profesor = new Profesor();
const personalAdministrativo = new PersonalAdministrativo();

// Utilizamos los métodos de las instancias
profesor.enseñar('Matemáticas');
personalAdministrativo.gestionarTramite('Inscripción de estudiantes');
