import { CreatePollDto, JoinPollDto } from "./dtos";
export declare class PollsController {
    create(CreatePollDto: CreatePollDto): Promise<CreatePollDto>;
    join(JoinPollDto: JoinPollDto): Promise<JoinPollDto>;
    rejoin(): Promise<void>;
}
