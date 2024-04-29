import type { BaseSkill } from '@/schemas/base-skills.schemas';
import type { PerformanceSkillsType } from '@/types/skills.types'
import CharacterSkillStructure from '@/classes/characterSkills.classes';

const ACTING: BaseSkill = { skillName: 'Acting', type: 'PERFORMANCE', baseStat: 'COOL', difficulty: 1, rank: 0 }

const PerformanceSkills: PerformanceSkillsType = {
    Acting: new CharacterSkillStructure(ACTING),
}

export default PerformanceSkills;
