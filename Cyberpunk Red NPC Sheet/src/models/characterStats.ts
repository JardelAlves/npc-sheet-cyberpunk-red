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

    setRefStat(ref: number) {
        this.REF = ref;
    }

    setDexStat(dex: number) {
        this.DEX = dex;
    }

    setTechStat(tech: number) {
        this.TECH = tech;
    }

    setCoolStat(cool: number) {
        this.COOL = cool;
    }

    setWillStat(will: number) {
        this.WILL = will;
    }

    setLuckStat(luck: number) {
        this.LUCK = luck;
    }

    setMoveStat(move: number) {
        this.MOVE = move;
    }

    setBodyStat(body: number) {
        this.BODY = body;
    }

    setEmpStat(emp: number) {
        this.EMP = emp;
    }
}