import type { BaseSkill } from '@/schemas/base-skills.schemas';
import type { EducationSkillsType } from '@/types/skills.types'
import CharacterSkillStructure from '@/classes/characterSkills.classes';

const ACCOUNTING: BaseSkill = { skillName: 'Accounting', type: 'AWARENESS', baseStat: 'INT', difficulty: 1, rank: 0 }
const ANIMAL_HANDLING: BaseSkill = { skillName: 'Animal Handling', type: 'AWARENESS', baseStat: 'INT', difficulty: 1, rank: 0 }
const BUREAUCRACY: BaseSkill = { skillName: 'Bureaucracy', type: 'AWARENESS', baseStat: 'INT', difficulty: 1, rank: 0 }
const BUSINESS: BaseSkill = { skillName: 'Business', type: 'AWARENESS', baseStat: 'INT', difficulty: 1, rank: 0 }
const COMPOSITION: BaseSkill = { skillName: 'Composition', type: 'AWARENESS', baseStat: 'INT', difficulty: 1, rank: 0 }
const CRIMINOLOGY: BaseSkill = { skillName: 'Criminology', type: 'AWARENESS', baseStat: 'INT', difficulty: 1, rank: 0 }
const CRYPTOGRAPHY: BaseSkill = { skillName: 'Cryptography', type: 'AWARENESS', baseStat: 'INT', difficulty: 1, rank: 0 }
const DEDUCTION: BaseSkill = { skillName: 'Deduction', type: 'AWARENESS', baseStat: 'INT', difficulty: 1, rank: 0 }
const EDUCATION: BaseSkill = { skillName: 'Education', type: 'AWARENESS', baseStat: 'INT', difficulty: 1, rank: 0 }
const GAMBLE: BaseSkill = { skillName: 'Gamble', type: 'AWARENESS', baseStat: 'INT', difficulty: 1, rank: 0 }
const LIBRARY_SEARCH: BaseSkill = { skillName: 'Library Search', type: 'AWARENESS', baseStat: 'INT', difficulty: 1, rank: 0 }
const TACTICS: BaseSkill = { skillName: 'Tactics', type: 'AWARENESS', baseStat: 'INT', difficulty: 1, rank: 0 }
const WILDERNESS_SURVIVAL: BaseSkill = { skillName: 'Wilderness Survival', type: 'AWARENESS', baseStat: 'INT', difficulty: 1, rank: 0 }

const EducationSkills: EducationSkillsType = {
    Accounting: new CharacterSkillStructure(ACCOUNTING),
    AnimalHandling: new CharacterSkillStructure(ANIMAL_HANDLING),
    Bureaucracy: new CharacterSkillStructure(BUREAUCRACY),
    Business: new CharacterSkillStructure(BUSINESS),
    Composition: new CharacterSkillStructure(COMPOSITION),
    Criminology: new CharacterSkillStructure(CRIMINOLOGY),
    Cryptography: new CharacterSkillStructure(CRYPTOGRAPHY),
    Deduction: new CharacterSkillStructure(DEDUCTION),
    Education: new CharacterSkillStructure(EDUCATION),
    Gamble: new CharacterSkillStructure(GAMBLE),
    LibrarySearch: new CharacterSkillStructure(LIBRARY_SEARCH),
    Tactics: new CharacterSkillStructure(TACTICS),
    WildernessSurvival: new CharacterSkillStructure(WILDERNESS_SURVIVAL)
}

export default EducationSkills;