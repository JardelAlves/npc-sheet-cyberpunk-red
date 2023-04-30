export default class ArmorModel {
    public name: string;
    public type: string;
    public penalty: number;
    public SP?: number;
    public HP?: number;

    constructor(name: string, type: string,  penalty: number, SP?: number, HP?: number) {
        this.name = name;
        this.type = type;
        this.SP = SP;
        this.penalty = penalty;
        this.HP = HP;
    }
}