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
exports.CreateCurriculoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCurriculoDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'lorem ipsum dolor sit amet, consectetur adip  euismod  tempor incididunt ut lab',
        description: `Informar a biografia para melhorar o curriculo.`,
    }),
    (0, class_validator_1.MinLength)(20),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCurriculoDto.prototype, "biografia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'lorem ipsum dolor sit amet, consectetur adip  euismod  tempor incididunt ut lab',
        description: `Informar a formação para melhorar o curriculo.`,
    }),
    (0, class_validator_1.MinLength)(20),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCurriculoDto.prototype, "formacao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'lorem ipsum dolor sit amet, consectetur adip  euismod  tempor incididunt ut lab',
        description: `Informar a experiêcia para melhorar o curriculo.`,
    }),
    (0, class_validator_1.MinLength)(20),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCurriculoDto.prototype, "experiencia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'lorem ipsum dolor sit amet, consectetur adip  euismod  tempor incididunt ut lab',
        description: `Informar a competência para melhorar o curriculo.`,
    }),
    (0, class_validator_1.MinLength)(20),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCurriculoDto.prototype, "competencia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'lorem ipsum dolor sit amet, consectetur adip  euismod  tempor incididunt ut lab',
        description: `Informar a habilidade para melhorar o curriculo.`,
    }),
    (0, class_validator_1.MinLength)(20),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCurriculoDto.prototype, "habilidade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
        description: `Informar o id do candidato.`,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateCurriculoDto.prototype, "candidatoId", void 0);
exports.CreateCurriculoDto = CreateCurriculoDto;
//# sourceMappingURL=create-curriculo.dto.js.map