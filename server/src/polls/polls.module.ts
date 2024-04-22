import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PollsController } from "./polls.controller";
import { PollService } from "./polls.service";
import { redisModule } from "src/modules.config";
import { PollsRepository } from "./polls.repository";

@Module({
    imports: [ConfigModule, redisModule], // ConfigModule is a module that help us to get into env_variables to be able to use it here // and in general here we import other modules so we can use it here in this current module
    controllers: [PollsController], // here we put the controller that we wanna use, controllers contains the handling of requests and responses, not the business logic
    providers: [PollService, PollsRepository], // here we put the services we want this module and the rest of (imports/controllers/other providers) to be able to access it and use it
    exports:[]
})
export class pollsModule {}