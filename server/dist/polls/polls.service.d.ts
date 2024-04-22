import { CreatePollFields, joinPollFields, rejoinPollFields } from './types';
export declare class PollService {
    createPoll(fields: CreatePollFields): Promise<{
        pollId: string;
        userId: string;
        topic: string;
        votesPerVoter: number;
        name: string;
    }>;
    joinPoll(fields: joinPollFields): Promise<{
        userId: string;
        pollID: string;
        name: string;
    }>;
    rejoin(fields: rejoinPollFields): Promise<rejoinPollFields>;
}
