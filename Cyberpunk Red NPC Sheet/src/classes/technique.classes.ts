import type { BaseSkill } from '@/schemas/base-skills.schemas';
import CharacterSkillStructure from '@/classes/characterSkills.classes';
import type { TechniqueSkillsType } from '@/types/skills.types'

const AIR_VEHICLE_TECH: BaseSkill = { skillName: 'Air Vehicle Tech', type: 'TECHNIQUE', baseStat: 'TECH', difficulty: 1, rank: 0 }
const BASIC_TECH: BaseSkill = { skillName: 'Basic Tech', type: 'TECHNIQUE', baseStat: 'TECH', difficulty: 1, rank: 0 }
const CYBERTECH: BaseSkill = { skillName: 'Cybertech', type: 'TECHNIQUE', baseStat: 'TECH', difficulty: 1, rank: 0 }
const DEMOLITIONS: BaseSkill = { skillName: 'Demolitions', type: 'TECHNIQUE', baseStat: 'TECH', difficulty: 2, rank: 0 }
const ELECTRONICS_SECURITY_TECH: BaseSkill = { skillName: 'Electronics/Security Tech', type: 'TECHNIQUE', baseStat: 'TECH', difficulty: 2, rank: 0 }
const FIRST_AID: BaseSkill = { skillName: 'First Aid', type: 'TECHNIQUE', baseStat: 'TECH', difficulty: 1, rank: 0 }
const FORGERY: BaseSkill = { skillName: 'Forgery', type: 'TECHNIQUE', baseStat: 'TECH', difficulty: 1, rank: 0 }
const LAND_VEHICLE_TECH: BaseSkill = { skillName: 'Land Vehicle Tech', type: 'TECHNIQUE', baseStat: 'TECH', difficulty: 1, rank: 0 }
const PAINT_DRAW_SCULPT: BaseSkill = { skillName: 'Paint/Draw/Sculpt', type: 'TECHNIQUE', baseStat: 'TECH', difficulty: 1, rank: 0 }
const PARAMEDIC: BaseSkill = { skillName: 'Paramedic', type: 'TECHNIQUE', baseStat: 'TECH', difficulty: 2, rank: 0 }
const PHOTOGRAPHY_FILM: BaseSkill = { skillName: 'Photography/Film', type: 'TECHNIQUE', baseStat: 'TECH', difficulty: 1, rank: 0 }
const PICK_LOCK: BaseSkill = { skillName: 'Pick Lock', type: 'TECHNIQUE', baseStat: 'TECH', difficulty: 1, rank: 0 }
const PICK_POCKET: BaseSkill = { skillName: 'Pick Pocket', type: 'TECHNIQUE', baseStat: 'TECH', difficulty: 1, rank: 0 }
const SEA_VEHICLE_TECH: BaseSkill = { skillName: 'Sea Vehicle Tech', type: 'TECHNIQUE', baseStat: 'TECH', difficulty: 1, rank: 0 }
const WEAPONSTECH: BaseSkill = { skillName: 'Weaponstech', type: 'TECHNIQUE', baseStat: 'TECH', difficulty: 1, rank: 0 }

const TechniqueSkills: TechniqueSkillsType = {
    AirVehicleTech: new CharacterSkillStructure(AIR_VEHICLE_TECH),
    BasicTech: new CharacterSkillStructure(BASIC_TECH),
    Cybertech: new CharacterSkillStructure(CYBERTECH),
    Demolitions: new CharacterSkillStructure(DEMOLITIONS),
    ElectronicsSecurityTech: new CharacterSkillStructure(ELECTRONICS_SECURITY_TECH),
    FirstAid: new CharacterSkillStructure(FIRST_AID),
    Forgery: new CharacterSkillStructure(FORGERY),
    LandVehicleTech: new CharacterSkillStructure(LAND_VEHICLE_TECH),
    PaintDrawSculpt: new CharacterSkillStructure(PAINT_DRAW_SCULPT),
    Paramedic: new CharacterSkillStructure(PARAMEDIC),
    PhotographyFilm: new CharacterSkillStructure(PHOTOGRAPHY_FILM),
    PickLock: new CharacterSkillStructure(PICK_LOCK),
    PickPocket: new CharacterSkillStructure(PICK_POCKET),
    SeaVehicleTech: new CharacterSkillStructure(SEA_VEHICLE_TECH),
    WeaponsTech: new CharacterSkillStructure(WEAPONSTECH)
}

export default TechniqueSkills;
