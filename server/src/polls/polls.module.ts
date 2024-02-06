import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PollsController } from "./polls.controller";

@Module({
    imports: [ConfigModule], // Help us to get into env_variables to be able to use it here
    controllers: [PollsController],
    providers: [],
    exports:[]
})
export class pollsModule {}