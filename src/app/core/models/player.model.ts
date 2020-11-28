import { Iscore } from './score.model';

export class Player {
    name: string;
    score: Iscore;
};

export interface IPlayers {
    Players: Player[];
}

