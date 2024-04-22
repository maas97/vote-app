import { Body, Controller, Logger, Post } from "@nestjs/common";
import { CreatePollDto, JoinPollDto } from "./dtos";
import { PollsService } from './polls.service'

@Controller('polls') // we write the basic url path here that all methods will have & Nest by default add localhost:port to this path
export class PollsController {

    constructor(private pollsService: PollsService) {};

    @Post()
    async create(@Body() CreatePollDto: CreatePollDto ){
        // Logger.log("In create !!")
        // return CreatePollDto;

        const result = await this.pollsService.createPoll(CreatePollDto);

        return result;
    }

    @Post('/join')
    async join(@Body() JoinPollDto: JoinPollDto){ 
        // Logger.log("In join !!")
        // return JoinPollDto;

        const result = await this.pollsService.joinPoll(JoinPollDto);

        return result;
    }

    @Post('/rejoin')
    async rejoin(){
        // Logger.log("In rejoin !!")

        const result = await this.pollsService.rejoin({
            name: 'From Token',
            userID: 'string',
            pollID: 'Also From Token'
        })

        return result;
    }
}