import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { pollsModule } from './polls/polls.module';
import { PollService } from './polls/polls.service';
import { PollsController } from './polls/polls.controller';

@Module({
  imports: [ConfigModule.forRoot(), pollsModule], // ConfigModule is a module that has a factory method for creating our app module that 
  controllers: [PollsController],
  providers: [PollService],
  exports: []
})
export class AppModule {}