import type { BaseSkill } from '@/schemas/base-skills.schemas';
import type { RangedWeaponSkillsType } from '@/types/skills.types'
import CharacterSkillStructure from '@/classes/characterSkills.classes';

const ARCHERY: BaseSkill = { skillName: 'Archery', type: 'RANGED_WEAPON', baseStat: 'REF', difficulty: 1, rank: 0 }
const AUTOFIRE: BaseSkill = { skillName: 'Autofire', type: 'RANGED_WEAPON', baseStat: 'REF', difficulty: 2, rank: 0 }
const HANDGUN: BaseSkill = { skillName: 'Handgun', type: 'RANGED_WEAPON', baseStat: 'REF', difficulty: 1, rank: 0 }
const HEAVY_WEAPONS: BaseSkill = { skillName: 'Heavy Weapons', type: 'RANGED_WEAPON', baseStat: 'REF', difficulty: 2, rank: 0 }
const SHOULDER_ARMS: BaseSkill = { skillName: 'Shoulder Arms', type: 'RANGED_WEAPON', baseStat: 'REF', difficulty: 1, rank: 0 }

const RangedWeaponSkills: RangedWeaponSkillsType = {
    Archery: new CharacterSkillStructure(ARCHERY),
    AutoFire: new CharacterSkillStructure(AUTOFIRE),
    Handgun: new CharacterSkillStructure(HANDGUN),
    HeavyWeapons: new CharacterSkillStructure(HEAVY_WEAPONS),
    ShoulderArms: new CharacterSkillStructure(SHOULDER_ARMS)
}

export default RangedWeaponSkills;
