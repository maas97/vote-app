import { CreatePollFields, joinPollFields, rejoinPollFields } from './types';
import { PollsRepository } from './polls.repository';
export declare class PollsService {
    private readonly pollsRepository;
    private readonly logger;
    constructor(pollsRepository: PollsRepository);
    createPoll(fields: CreatePollFields): Promise<{
        poll: import("shared").Poll;
    }>;
    joinPoll(fields: joinPollFields): Promise<{
        poll: import("shared").Poll;
    }>;
    rejoin(fields: rejoinPollFields): Promise<import("shared").Poll>;
}
