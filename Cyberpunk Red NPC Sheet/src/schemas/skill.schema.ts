import AwarenessSkills from '@/classes/awareness.classes'
import BodySkills from '@/classes/body.classes'
import ControlSkills from '@/classes/control.classes'
import EducationSkills from '@/classes/education.classes'
import FightingSkills from '@/classes/fighting.classes'
import PerformanceSkills from '@/classes/performance.classes'
import RangedWeaponSkills from '@/classes/rangedWeapon.classes'
import SocialSkills from '@/classes/social.classes'
import TechniqueSkills from '@/classes/technique.classes'

export type SkillsType = {
    awareness: typeof AwarenessSkills
    body: typeof BodySkills
    control: typeof ControlSkills
    education: typeof EducationSkills
    fighting: typeof FightingSkills
    performance: typeof PerformanceSkills
    rangedWeapon: typeof RangedWeaponSkills
    social: typeof SocialSkills
    technique: typeof TechniqueSkills
}

export const Skills: SkillsType = {
    awareness: AwarenessSkills,
    body: BodySkills,
    control: ControlSkills,
    education: EducationSkills,
    fighting: FightingSkills,
    performance: PerformanceSkills,
    rangedWeapon: RangedWeaponSkills,
    social: SocialSkills,
    technique: TechniqueSkills
}