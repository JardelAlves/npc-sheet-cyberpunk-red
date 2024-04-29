import type { BaseSkill } from '@/schemas/base-skills.schemas';
import CharacterSkillStructure from '@/classes/characterSkills.classes';
import type { SocialSkillsType } from '@/types/skills.types'

const BRIBERY: BaseSkill = { skillName: 'Bribery', type: 'SOCIAL', baseStat: 'COOL', difficulty: 1, rank: 0 }
const CONVERSATION: BaseSkill = { skillName: 'Conversation', type: 'SOCIAL', baseStat: 'EMP', difficulty: 1, rank: 0 }
const HUMAN_PERCEPTION: BaseSkill = { skillName: 'Human Perception', type: 'SOCIAL', baseStat: 'EMP', difficulty: 1, rank: 0 }
const INTERROGATION: BaseSkill = { skillName: 'Interrogation', type: 'SOCIAL', baseStat: 'COOL', difficulty: 1, rank: 0 }
const PERSUASION: BaseSkill = { skillName: 'Persuasion', type: 'SOCIAL', baseStat: 'COOL', difficulty: 1, rank: 0 }
const PERSONAL_GROOMING: BaseSkill = { skillName: 'Personal Grooming', type: 'SOCIAL', baseStat: 'COOL', difficulty: 1, rank: 0 }
const STREETWISE: BaseSkill = { skillName: 'Streetwise', type: 'SOCIAL', baseStat: 'COOL', difficulty: 1, rank: 0 }
const TRADING: BaseSkill = { skillName: 'Trading', type: 'SOCIAL', baseStat: 'COOL', difficulty: 1, rank: 0 }
const WARDROBE_STYLE: BaseSkill = { skillName: 'Wardrobe & Style', type: 'SOCIAL', baseStat: 'COOL', difficulty: 1, rank: 0 }

const SocialSkills: SocialSkillsType = {
    Bribery: new CharacterSkillStructure(BRIBERY),
    Conversation: new CharacterSkillStructure(CONVERSATION),
    HumanPerception: new CharacterSkillStructure(HUMAN_PERCEPTION),
    Interrogation: new CharacterSkillStructure(INTERROGATION),
    Persuasion: new CharacterSkillStructure(PERSUASION),
    PersonalGrooming: new CharacterSkillStructure(PERSONAL_GROOMING),
    Streetwise: new CharacterSkillStructure(STREETWISE),
    Trading: new CharacterSkillStructure(TRADING),
    WardrobeStyle: new CharacterSkillStructure(WARDROBE_STYLE)
}

export default SocialSkills;
