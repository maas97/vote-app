import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { pollsModule } from './polls/polls.module';


@Module({
  imports: [ConfigModule.forRoot(), pollsModule], // ConfigModule is a module that has a factory method for creating our app module that 
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}