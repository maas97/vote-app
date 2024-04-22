export type CreatePollFields = {
    topic: string;
    votesPerVoter: number;
    name: string;
};
export type joinPollFields = {
    pollID: string;
    name: string;
};
export type rejoinPollFields = {
    pollID: string;
    userID: string;
    name: string;
};
export type CreatePollData = {
    pollID: string;
    topic: string;
    votesPerVoter: number;
    userID: string;
};
export type AddParticipantData = {
    pollID: string;
    userId: string;
    name: string;
};
