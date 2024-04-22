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
var PollsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollsService = void 0;
const common_1 = require("@nestjs/common");
const ids_1 = require("../ids");
const polls_repository_1 = require("./polls.repository");
let PollsService = PollsService_1 = class PollsService {
    constructor(pollsRepository) {
        this.pollsRepository = pollsRepository;
        this.logger = new common_1.Logger(PollsService_1.name);
    }
    ;
    async createPoll(fields) {
        const pollID = (0, ids_1.createPollId)();
        const userID = (0, ids_1.createUserId)();
        const createdPoll = await this.pollsRepository.createPoll(Object.assign(Object.assign({}, fields), { pollID,
            userID }));
        return {
            poll: createdPoll,
        };
    }
    ;
    async joinPoll(fields) {
        const userID = (0, ids_1.createUserId)();
        this.logger.debug(`Fetching poll with ID: ${fields.pollID} for user with ID: ${userID}`);
        const joinedPoll = await this.pollsRepository.getPoll(fields.pollID);
        return {
            poll: joinedPoll
        };
    }
    async rejoin(fields) {
        this.logger.debug(`Rejoining poll with ID: ${fields.pollID} for user with ID: ${fields.userID} with name ${fields.name}`);
        const joinedPoll = await this.pollsRepository.AddParticipant(fields);
        return joinedPoll;
    }
};
PollsService = PollsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [polls_repository_1.PollsRepository])
], PollsService);
exports.PollsService = PollsService;
//# sourceMappingURL=polls.service.js.map