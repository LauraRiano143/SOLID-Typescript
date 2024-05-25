"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalAdministrativo = void 0;
// Clase concreta que implementa las funcionalidades del personal administrativo
var PersonalAdministrativo = /** @class */ (function () {
    function PersonalAdministrativo() {
    }
    PersonalAdministrativo.prototype.gestionarTramite = function (tramite) {
        console.log("El personal administrativo est\u00E1 gestionando el tr\u00E1mite de ".concat(tramite));
    };
    return PersonalAdministrativo;
}());
exports.PersonalAdministrativo = PersonalAdministrativo;
