"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pollsModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const polls_controller_1 = require("./polls.controller");
const polls_service_1 = require("./polls.service");
const modules_config_1 = require("../modules.config");
const polls_repository_1 = require("./polls.repository");
let pollsModule = class pollsModule {
};
pollsModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule, modules_config_1.redisModule],
        controllers: [polls_controller_1.PollsController],
        providers: [polls_service_1.PollService, polls_repository_1.PollsRepository],
        exports: []
    })
], pollsModule);
exports.pollsModule = pollsModule;
//# sourceMappingURL=polls.module.js.map