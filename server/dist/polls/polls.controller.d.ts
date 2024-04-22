import { CreatePollDto, JoinPollDto } from "./dtos";
import { PollService } from './polls.service';
export declare class PollsController {
    private pollsService;
    constructor(pollsService: PollService);
    create(CreatePollDto: CreatePollDto): Promise<{
        pollId: string;
        userId: string;
        topic: string;
        votesPerVoter: number;
        name: string;
    }>;
    join(JoinPollDto: JoinPollDto): Promise<{
        userId: string;
        pollID: string;
        name: string;
    }>;
    rejoin(): Promise<import("./types").rejoinPollFields>;
}
