"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCandidatoVagaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_candidato_vaga_dto_1 = require("./create-candidato-vaga.dto");
const Status_tipo_1 = require("../constants/Status.tipo");
const class_validator_1 = require("class-validator");
class UpdateCandidatoVagaDto extends (0, mapped_types_1.PartialType)(create_candidato_vaga_dto_1.CreateCandidatoVagaDto) {
}
__decorate([
    (0, class_validator_1.IsEnum)(Status_tipo_1.STATUS_TIPO),
    __metadata("design:type", String)
], UpdateCandidatoVagaDto.prototype, "status", void 0);
exports.UpdateCandidatoVagaDto = UpdateCandidatoVagaDto;
//# sourceMappingURL=update-candidato-vaga.dto.js.map