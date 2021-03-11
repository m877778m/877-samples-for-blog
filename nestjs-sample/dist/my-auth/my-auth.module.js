"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyAuthModule = void 0;
const common_1 = require("@nestjs/common");
const my_auth_controller_1 = require("./my-auth.controller");
const my_auth_service_1 = require("./my-auth.service");
let MyAuthModule = class MyAuthModule {
};
MyAuthModule = __decorate([
    common_1.Module({
        controllers: [my_auth_controller_1.MyAuthController],
        providers: [my_auth_service_1.MyAuthService]
    })
], MyAuthModule);
exports.MyAuthModule = MyAuthModule;
//# sourceMappingURL=my-auth.module.js.map