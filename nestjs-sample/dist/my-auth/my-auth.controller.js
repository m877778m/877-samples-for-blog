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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyAuthController = void 0;
const common_1 = require("@nestjs/common");
const my_auth_service_1 = require("./my-auth.service");
const login_item_dto_1 = require("./dto/login-item.dto");
let MyAuthController = class MyAuthController {
    constructor(myAuthService) {
        this.myAuthService = myAuthService;
    }
    index(loginItemDTO, res) {
        console.log(loginItemDTO);
        let result = this.myAuthService.login(loginItemDTO);
        return res.status(common_1.HttpStatus.OK).json(result);
    }
};
__decorate([
    common_1.Post(),
    common_1.Header('Content-Type', 'application/json'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_item_dto_1.LoginItemDTO, Object]),
    __metadata("design:returntype", void 0)
], MyAuthController.prototype, "index", null);
MyAuthController = __decorate([
    common_1.Controller('my-auth'),
    __metadata("design:paramtypes", [my_auth_service_1.MyAuthService])
], MyAuthController);
exports.MyAuthController = MyAuthController;
//# sourceMappingURL=my-auth.controller.js.map