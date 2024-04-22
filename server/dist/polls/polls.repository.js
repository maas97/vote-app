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
var PollsRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollsRepository = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const redis_module_1 = require("../redis.module");
let PollsRepository = PollsRepository_1 = class PollsRepository {
    constructor(configService, redisClient) {
        this.redisClient = redisClient;
        this.logger = new common_2.Logger(PollsRepository_1.name);
        this.ttl = configService.get('POLL_DURATION');
    }
    ;
    async createPoll({ votesPerVoter, topic, pollID, userID }) {
        const initialPoll = {
            id: pollID,
            topic,
            votesPerVoter,
            participants: {},
            adminID: userID
        };
        this.logger.log(`Creating new poll: ${JSON.stringify(initialPoll, null, 2)} with TTL ${this.ttl} `);
        const key = `polls:${pollID}`;
        try {
            await this.redisClient.multi([
                ['send_command', 'JSON.SET', key, '.', JSON.stringify(initialPoll)],
                ['expire', key, this.ttl]
            ]).exec();
            return initialPoll;
        }
        catch (e) {
            this.logger.error(`Failed to add poll ${JSON.stringify(initialPoll)}\n${e}}`);
            throw new common_1.InternalServerErrorException();
        }
    }
};
PollsRepository = PollsRepository_1 = __decorate([
    (0, common_2.Injectable)(),
    __param(1, (0, common_1.Inject)(redis_module_1.IORedisKey)),
    __metadata("design:paramtypes", [config_1.ConfigService, Object])
], PollsRepository);
exports.PollsRepository = PollsRepository;
//# sourceMappingURL=polls.repository.js.map