import CharacterRole from "./characterRoles";
import CharacterSkills from "./characterSkills";
import CharacterStats from "./characterStats";

const stats = new CharacterStats(8, 8, 8, 8, 8, 8, 8, 8, 8, 8);
const role = CharacterRole['SOLO'];
const skills = CharacterSkills;

// const hitPoints: number = 10 + (5 * Math.ceil((stats.BODY + stats.WILL) / 2));
// const humanity: number = 10 * stats.EMP;

skills.ACCOUNTING.setSkillRank(2)

/**
 * @todo Criar classe de Armor e SP
 * @todo Descobrir uma maneira de implementar a mudança de estado dos STATS
 * @todo Documentar classes
 */
class Character {
    public role: object;
    public stats: CharacterStats;
    public hitPoints: number;
    public humanity: number;

    constructor(role: string) {
        this.role = CharacterRole[role as keyof typeof CharacterRole];
        this.stats = new CharacterStats;
        this.hitPoints = this.setHitPoints();
        this.humanity = this.setHumanity();
    }

    setHitPoints() {
        return 10 + (5 * Math.ceil((this.stats.BODY + this.stats.WILL) / 2))
    }

    setHumanity() {
        return 10 * this.stats.EMP;
    }
}

const char = new Character('SOLO');

export default {
    skills, stats, role, /*hitPoints, humanity,*/ char
}