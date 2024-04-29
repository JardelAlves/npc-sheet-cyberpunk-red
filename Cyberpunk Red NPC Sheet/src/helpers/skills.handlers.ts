import type CharacterSkillStructure from '@/classes/characterSkills.classes';
import type { BaseStat } from '@/schemas/stat.schemas';

/**
 * Sets the base stat rank for all skills in `skillBase` that match the base stat specified in `statBase`.
 * @type {function}
 * @param {Record<string, CharacterSkillStructure>} skillBase Type of skills.
 * @param {BaseStat} statBase Structure of stat.
 */
export function setAllBaseStatRank(
    skillBase: Record<string, CharacterSkillStructure>,
    statBase: BaseStat
) {
    Object.keys(skillBase).forEach(skill => {
        if (skillBase[skill].skill.baseStat === statBase.stat)
            skillBase[skill].setBaseStatRank(statBase.rank);
    })
}

/**
 * Retrieves the names of all skills from the given `skillBase`.
 * @type {function}
 * @param {Record<string, CharacterSkillStructure>} skillBase Type of skills.
 * @returns {Array<string>} Array of skill names.
 */
export function getAllSkillsName(skillBase: Record<string, CharacterSkillStructure>): Array<string> {
    return Object.values(skillBase).map(skill => skill.skill.skillName);
}

export function getTableTabInformation(skill: Record<string, CharacterSkillStructure>): Array<object> {
    return Object.entries(skill).map(([skill, targetSkill]) => {
        return {
            name: targetSkill.skill.skillName,
            lvl: targetSkill.getSkillRank(),
            stat: targetSkill.getBaseStatRank(),
            base: targetSkill.getSkillBaseTotal(),
            skill: skill
        }
    })
}