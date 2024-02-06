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
exports.PollsController = void 0;
const common_1 = require("@nestjs/common");
const dtos_1 = require("./dtos");
let PollsController = class PollsController {
    async create(CreatePollDto) {
        common_1.Logger.log("In create !!");
        return CreatePollDto;
    }
    async join(JoinPollDto) {
        common_1.Logger.log("In join !!");
        return JoinPollDto;
    }
    async rejoin() {
        common_1.Logger.log("In rejoin !!");
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreatePollDto]),
    __metadata("design:returntype", Promise)
], PollsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/join'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.JoinPollDto]),
    __metadata("design:returntype", Promise)
], PollsController.prototype, "join", null);
__decorate([
    (0, common_1.Post)('/rejoin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PollsController.prototype, "rejoin", null);
PollsController = __decorate([
    (0, common_1.Controller)('polls')
], PollsController);
exports.PollsController = PollsController;
//# sourceMappingURL=polls.controller.js.map