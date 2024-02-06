import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { pollsModule } from './polls/polls.module';

@Module({
  imports: [ConfigModule.forRoot(), pollsModule],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}