import { Injectable, Logger } from '@nestjs/common';
import { createPollId, createUserId } from 'src/ids'
import { CreatePollFields, joinPollFields, rejoinPollFields } from './types';
import { PollsRepository } from './polls.repository';

@Injectable() // we are using Injectable because we need to inject this service to a module provider, and by using it we can put this service with any module provider so anything related to the module like controllers or other services, we be able to use this current service
export class PollsService {

    private readonly logger = new Logger(PollsService.name);
    
    constructor(private readonly pollsRepository: PollsRepository) {};

    async createPoll(fields: CreatePollFields) {
        const pollID = createPollId();
        const userID = createUserId();

        const createdPoll = await this.pollsRepository.createPoll({
            ...fields,
            pollID,
            userID
        })

        return {
            poll: createdPoll,
        }
    };

    async joinPoll(fields: joinPollFields) {
        const userID = createUserId();

        this.logger.debug(`Fetching poll with ID: ${fields.pollID} for user with ID: ${userID}`);

        const joinedPoll = await this.pollsRepository.getPoll(fields.pollID);

        return {
            poll: joinedPoll
        }
    }

    async rejoin(fields: rejoinPollFields) {

        this.logger.debug(
            `Rejoining poll with ID: ${fields.pollID} for user with ID: ${fields.userID} with name ${fields.name}`
        );

        const joinedPoll = await this.pollsRepository.AddParticipant(fields);

        return joinedPoll;
    }


}