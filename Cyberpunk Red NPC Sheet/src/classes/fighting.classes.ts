import type { BaseSkill } from '@/schemas/base-skills.schemas';
import type { FightingSkillsType } from '@/types/skills.types'
import CharacterSkillStructure from '@/classes/characterSkills.classes';

const BRAWLING: BaseSkill = { skillName: 'Brawling', type: 'FIGHTING', baseStat: 'DEX', difficulty: 1, rank: 0 }
const EVASION: BaseSkill = { skillName: 'Evasion', type: 'FIGHTING', baseStat: 'DEX', difficulty: 1, rank: 0 }
const MARTIAL_ARTS: BaseSkill = { skillName: 'Martial Arts', type: 'FIGHTING', baseStat: 'DEX', difficulty: 2, rank: 0 }
const MELEE_WEAPON: BaseSkill = { skillName: 'Melee Weapon', type: 'FIGHTING', baseStat: 'DEX', difficulty: 1, rank: 0 }

const FightingSkills: FightingSkillsType = {
    Brawling: new CharacterSkillStructure(BRAWLING),
    Evasion: new CharacterSkillStructure(EVASION),
    MartialArts: new CharacterSkillStructure(MARTIAL_ARTS),
    MeleeWeapon: new CharacterSkillStructure(MELEE_WEAPON)
}

export default FightingSkills;
