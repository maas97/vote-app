import { CreatePollDto, JoinPollDto } from "./dtos";
import { PollsService } from './polls.service';
export declare class PollsController {
    private pollsService;
    constructor(pollsService: PollsService);
    create(CreatePollDto: CreatePollDto): Promise<{
        poll: import("shared").Poll;
    }>;
    join(JoinPollDto: JoinPollDto): Promise<{
        poll: import("shared").Poll;
    }>;
    rejoin(): Promise<import("shared").Poll>;
}
