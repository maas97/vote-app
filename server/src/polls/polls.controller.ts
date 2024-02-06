import { Body, Controller, Logger, Post } from "@nestjs/common";
import { CreatePollDto, JoinPollDto } from "./dtos";

@Controller('polls') // we write the basic url path here that all methods will have & Nest by default add localhost:port to this path

export class PollsController {
    @Post()
    async create(@Body() CreatePollDto: CreatePollDto ){
        Logger.log("In create !!")
        return CreatePollDto;
    }

    @Post('/join')
    async join(@Body() JoinPollDto: JoinPollDto){ 
        Logger.log("In join !!")
        return JoinPollDto;
    }

    @Post('/rejoin')
    async rejoin(){
        Logger.log("In rejoin !!")
    }
}