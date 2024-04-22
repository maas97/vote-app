"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollService = void 0;
const common_1 = require("@nestjs/common");
const ids_1 = require("../ids");
let PollService = class PollService {
    async createPoll(fields) {
        const pollId = (0, ids_1.createPollId)();
        const userId = (0, ids_1.createUserId)();
        return Object.assign(Object.assign({}, fields), { pollId,
            userId });
    }
    ;
    async joinPoll(fields) {
        const userId = (0, ids_1.createUserId)();
        return Object.assign(Object.assign({}, fields), { userId });
    }
    async rejoin(fields) {
        return fields;
    }
};
PollService = __decorate([
    (0, common_1.Injectable)()
], PollService);
exports.PollService = PollService;
//# sourceMappingURL=polls.service.js.map