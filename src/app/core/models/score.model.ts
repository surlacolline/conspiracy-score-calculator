

export interface Iscore {
    blue: number,
    red: number,
    green: number,
    yellow: number,
    purple: number,
    location: number[],
    coalition: number,
    isMaster: boolean,
    colorScore: number,
    totalScore: number
}

export class Score implements Iscore {
    blue: number = 1;
    red: number = 1;
    green: number = 1;
    yellow: number = 1;
    purple: number = 1;
    location: number[] = [0, 0, 0, 0, 0, 0];
    coalition: number = 1;
    isMaster: boolean = false;

    get colorScore(): number {
        return this.blue + this.red + this.yellow + this.purple + this.green;
    }

    get totalScore(): number {

        return this.colorScore +
            this.location?.reduce((partial_sum, a) => partial_sum + a, 0) +
            this.coalition * 3 +
            (this.isMaster ? 5 : 0);
    }


}