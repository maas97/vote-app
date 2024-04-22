import { Injectable } from '@nestjs/common';
import { createPollId, createUserId } from 'src/ids'
import { CreatePollFields, joinPollFields, rejoinPollFields } from './types';

@Injectable() // we are using Injectable because we need to inject this service to a module provider, and by using it we can put this service with any module provider so anything related to the module like controllers or other services, we be able to use this current service
export class PollService {

    async createPoll(fields: CreatePollFields) {
        const pollId = createPollId();
        const userId = createUserId();

        return {
            ...fields,
            pollId,
            userId
        }
    };

    async joinPoll(fields: joinPollFields) {
        const userId = createUserId();

        return {
            ...fields,
            userId
        }
    }

    async rejoin(fields: rejoinPollFields) {

        return fields;
    }


}