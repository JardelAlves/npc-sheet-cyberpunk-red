import CharacterRole from "./characterRoles";
import CharacterSkills from "./characterSkills";
import CharacterStats from "./characterStats";
import CharacterArmor from "./characterArmor";

const armor = new CharacterArmor;
armor.setBodyArmor('Body Armor', 'LIGHTARMOR', 11, 0);
armor.setHeadArmor('Head Armor', 'LIGHTARMOR', 11, 0);
armor.setShield('Shield', 'SHIELD', 11, 0);

/**
 * @todo Descobrir uma maneira de implementar a mudança de estado dos STATS
 * @todo Documentar classes
 */
class Character {
    public role: object;
    public stats: CharacterStats;
    public hitPoints: number;
    public humanity: number;
    public skills: object;
    public armor: object;

    constructor(role: string) {
        this.role = CharacterRole[role as keyof typeof CharacterRole];
        this.stats = new CharacterStats;
        this.hitPoints = this.setHitPoints();
        this.humanity = this.setHumanity();
        this.skills = CharacterSkills;
        this.armor = new CharacterArmor;
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
    char, armor
}