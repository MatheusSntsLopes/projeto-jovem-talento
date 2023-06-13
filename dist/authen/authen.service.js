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
exports.AuthenService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const unauthorized_error_1 = require("./errors/unauthorized.error");
const empresario_service_1 = require("../empresario/empresario.service");
const candidato_service_1 = require("../candidato/candidato.service");
let AuthenService = class AuthenService {
    constructor(jwtService, empresarioService, candidatoService) {
        this.jwtService = jwtService;
        this.empresarioService = empresarioService;
        this.candidatoService = candidatoService;
    }
    async login(user) {
        const payload = {
            sub: user.id,
            email: user.email,
            name: user.name,
        };
        return {
            access_token: this.jwtService.sign(payload),
            email: user.email,
            id: user.id,
            name: user.name,
        };
    }
    async validateUser(email, password) {
        const user = (await this.empresarioService.findByEmail(email)) ||
            (await this.candidatoService.findByEmail(email));
        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (isPasswordValid) {
                return user;
            }
            throw new unauthorized_error_1.UnauthorizedError('Email address or password provided is incorrect.');
        }
    }
};
AuthenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        empresario_service_1.EmpresarioService,
        candidato_service_1.CandidatoService])
], AuthenService);
exports.AuthenService = AuthenService;
//# sourceMappingURL=authen.service.js.map