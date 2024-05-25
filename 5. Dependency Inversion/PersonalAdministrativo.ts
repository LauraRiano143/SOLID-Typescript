import { PersonalAdministrativoInterface } from './PersonalAdministrativoInterface';

// Clase concreta que implementa las funcionalidades del personal administrativo
export class PersonalAdministrativo implements PersonalAdministrativoInterface {
    gestionarTramite(tramite: string): void {
        console.log(`El personal administrativo está gestionando el trámite de ${tramite}`);
    }
}
