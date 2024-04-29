import type { BaseSkill } from '@/schemas/base-skills.schemas';
import type { AwarenessSkillsType } from '@/types/skills.types'
import CharacterSkillStructure from '@/classes/characterSkills.classes';

const CONCENTRATION: BaseSkill = { skillName: 'Concentration', type: 'AWARENESS', baseStat: 'WILL', difficulty: 1, rank: 0 }
const CONCEAL_REVEAL_OBJECT: BaseSkill = { skillName: 'Conceal/Reveal Object', type: 'AWARENESS', baseStat: 'INT', difficulty: 1, rank: 0 }
const LIP_READING: BaseSkill = { skillName: 'Lip Reading', type: 'AWARENESS', baseStat: 'INT', difficulty: 1, rank: 0 }
const PERCEPTION: BaseSkill = { skillName: 'Perception', type: 'AWARENESS', baseStat: 'INT', difficulty: 1, rank: 0 }
const TRACKING: BaseSkill = { skillName: 'Tracking', type: 'AWARENESS', baseStat: 'INT', difficulty: 1, rank: 0 }

const AwarenessSkills: AwarenessSkillsType = {
    Concentration: new CharacterSkillStructure(CONCENTRATION),
    ConcealRevealObject: new CharacterSkillStructure(CONCEAL_REVEAL_OBJECT),
    LipReading: new CharacterSkillStructure(LIP_READING),
    Perception: new CharacterSkillStructure(PERCEPTION),
    Tracking: new CharacterSkillStructure(TRACKING)
}

export default AwarenessSkills;
