import type { BaseSkill } from '@/schemas/base-skills.schemas';
import type { BodySkillsType } from '@/types/skills.types'
import CharacterSkillStructure from '@/classes/characterSkills.classes';

const ATHLETICS: BaseSkill = { skillName: 'Athletics', type: 'BODY', baseStat: 'DEX', difficulty: 1, rank: 0 }
const CONTORTIONIST: BaseSkill = { skillName: 'Contortionist', type: 'BODY', baseStat: 'DEX', difficulty: 1, rank: 0 }
const DANCE: BaseSkill = { skillName: 'Dance', type: 'BODY', baseStat: 'DEX', difficulty: 1, rank: 0 }
const ENDURANCE: BaseSkill = { skillName: 'Endurance', type: 'BODY', baseStat: 'WILL', difficulty: 1, rank: 0 }
const RESIST_TORTURE_DRUGS: BaseSkill = { skillName: 'Resist Torture/Drugs', type: 'BODY', baseStat: 'WILL', difficulty: 1, rank: 0 }
const STEALTH: BaseSkill = { skillName: 'Stealth', type: 'BODY', baseStat: 'DEX', difficulty: 1, rank: 0 }

const BodySkills: BodySkillsType = {
    Athletics: new CharacterSkillStructure(ATHLETICS),
    Contortionist: new CharacterSkillStructure(CONTORTIONIST),
    Dance: new CharacterSkillStructure(DANCE),
    Endurance: new CharacterSkillStructure(ENDURANCE),
    ResistTortureDrugs: new CharacterSkillStructure(RESIST_TORTURE_DRUGS),
    Stealth: new CharacterSkillStructure(STEALTH)
}

export default BodySkills;
