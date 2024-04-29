import type { BaseSkill } from '@/schemas/base-skills.schemas'

export default class CharacterSkillStructure {
    public skill: BaseSkill;
    public baseStatRank: number;
    public baseTotal: number;

    constructor(skill: BaseSkill, baseStatRank: number = 0, baseTotal: number = 0) {
        this.skill = skill;
        this.baseStatRank = baseStatRank;
        this.baseTotal = baseTotal
    }

    setBaseStatRank(statRank: number) {
        this.baseStatRank = statRank;
        this.setSkillBaseTotalStat();
    }

    setSkillRank(rank: number) {
        this.skill.rank = rank;
        this.setSkillBaseTotalStat();
    }

    setSkillBaseTotalStat() {
        this.baseTotal = this.skill.rank + this.baseStatRank;
    }

    getSkillRank(): number {
        return this.skill.rank;
    }

    getBaseStatRank(): number {
        return this.baseStatRank;
    }

    getSkillBaseTotal(): number {
        return this.baseTotal;
    }
}