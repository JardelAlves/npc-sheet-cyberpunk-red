import type { BaseSkill } from '@/schemas/base-skills.schemas';
import type { ControlSkillsType } from '@/types/skills.types'
import CharacterSkillStructure from '@/classes/characterSkills.classes';

const DRIVE_LAND_VEHICLE: BaseSkill = { skillName: 'Drive Land Vehicle', type: 'CONTROL', baseStat: 'REF', difficulty: 1, rank: 0 }
const PILOT_AIR_VEHICLE: BaseSkill = { skillName: 'Pilot Air Vehicle', type: 'CONTROL', baseStat: 'REF', difficulty: 2, rank: 0 }
const PILOT_SEA_VEHICLE: BaseSkill = { skillName: 'Pilot Sea Vehicle', type: 'CONTROL', baseStat: 'REF', difficulty: 1, rank: 0 }
const RIDING: BaseSkill = { skillName: 'Riding', type: 'CONTROL', baseStat: 'REF', difficulty: 1, rank: 0 }

const ControlSkills: ControlSkillsType = {
    DriveLandVehicle: new CharacterSkillStructure(DRIVE_LAND_VEHICLE),
    PilotAirVehicle: new CharacterSkillStructure(PILOT_AIR_VEHICLE),
    PilotSeaVehicle: new CharacterSkillStructure(PILOT_SEA_VEHICLE),
    Riding: new CharacterSkillStructure(RIDING)
}

export default ControlSkills;