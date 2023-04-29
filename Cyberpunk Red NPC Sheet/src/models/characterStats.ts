export default class CharacterStats {
    public INT: number;
    public REF: number;
    public DEX: number;
    public TECH: number;
    public COOL: number;
    public WILL: number;
    public LUCK: number;
    public MOVE: number;
    public BODY: number;
    public EMP: number;

    constructor(INT: number = 0, REF: number = 0, DEX: number = 0, TECH: number = 0, COOL: number = 0, WILL: number = 0, LUCK: number = 0, MOVE: number = 0, BODY: number = 0, EMP: number = 0) {
        this.INT = INT;
        this.REF = REF;
        this.DEX = DEX;
        this.TECH = TECH;
        this.COOL = COOL;
        this.WILL = WILL;
        this.LUCK = LUCK;
        this.MOVE = MOVE;
        this.BODY = BODY;
        this.EMP = EMP;
    }

    setIntStat(int: number) {
        this.INT = int;
    }
}