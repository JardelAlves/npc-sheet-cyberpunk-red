import CharacterRole from "./characterRoles";
import CharacterStats from "./characterStats";
import CharacterArmor from "./characterArmor";
import ArmorHandler from "@/handlers/armorHandler";
import DamageHandler from "@/handlers/damageHandler";

import { type SkillsType, Skills } from '@/schemas/skill.schema';

/**
 * @todo Documentar classes
 */
export default class Character {
    public role!: object;
    public stats: CharacterStats;
    public hitPoints!: number;
    public humanity!: number;
    public skills: SkillsType;
    public armor: CharacterArmor;

    constructor() {
        this.stats = new CharacterStats;
        this.skills = Skills
        this.armor = new CharacterArmor;
    }

    setCharacterRole(role: string) {
        this.role = CharacterRole[role as keyof typeof CharacterRole];
    }

    setHitPoints() {
        this.hitPoints = 10 + (5 * Math.ceil((this.stats.BODY + this.stats.WILL) / 2));
    }

    setHumanity() {
        this.humanity = 10 * this.stats.EMP;
    }

    getTotalHitPoints() {
        return 10 + (5 * Math.ceil((this.stats.BODY + this.stats.WILL) / 2));
    }

    getTotalHumanity() {
        return 10 * this.stats.EMP;
    }

    // setSkillRank(skill: string, rank: number) {
    //     this.skills[skill as keyof typeof CharacterSkills].setSkillRank(rank);
    // }

    // setAllIntSkills() {
    //     Object.keys(this.skills).forEach(skill => {
    //         if (this.skills[skill as keyof typeof CharacterSkills].baseStat === 'INT') {
    //             this.skills[skill as keyof typeof CharacterSkills].setBaseStatRank(this.stats.INT);
    //         }
    //     })
    // }

    // setAllRefSkills() {
    //     Object.keys(this.skills).forEach(skill => {
    //         if (this.skills[skill as keyof typeof CharacterSkills].baseStat === 'REF') {
    //             this.skills[skill as keyof typeof CharacterSkills].setBaseStatRank(this.stats.REF);
    //         }
    //     })
    // }

    // setAllDexSkills() {
    //     Object.keys(this.skills).forEach(skill => {
    //         if (this.skills[skill as keyof typeof CharacterSkills].baseStat === 'DEX') {
    //             this.skills[skill as keyof typeof CharacterSkills].setBaseStatRank(this.stats.DEX);
    //         }
    //     })
    // }

    // setAllTechSkills() {
    //     Object.keys(this.skills).forEach(skill => {
    //         if (this.skills[skill as keyof typeof CharacterSkills].baseStat === 'TECH') {
    //             this.skills[skill as keyof typeof CharacterSkills].setBaseStatRank(this.stats.TECH);
    //         }
    //     })
    // }

    // setAllCoolSkills() {
    //     Object.keys(this.skills).forEach(skill => {
    //         if (this.skills[skill as keyof typeof CharacterSkills].baseStat === 'COOL') {
    //             this.skills[skill as keyof typeof CharacterSkills].setBaseStatRank(this.stats.COOL);
    //         }
    //     })
    // }

    // setAllWillSkills() {
    //     Object.keys(this.skills).forEach(skill => {
    //         if (this.skills[skill as keyof typeof CharacterSkills].baseStat === 'WILL') {
    //             this.skills[skill as keyof typeof CharacterSkills].setBaseStatRank(this.stats.WILL);
    //         }
    //     })
    // }

    // setAllEmpSkills() {
    //     Object.keys(this.skills).forEach(skill => {
    //         if (this.skills[skill as keyof typeof CharacterSkills].baseStat === 'EMP') {
    //             this.skills[skill as keyof typeof CharacterSkills].setBaseStatRank(this.stats.EMP);
    //         }
    //     })
    // }

    // setSkillBaseTotal(skill: string) {
    //     this.skills[skill as keyof typeof CharacterSkills].setSkillBaseTotalStat();
    // }
}

// const char = new Character();
// char.setCharacterRole('ROCKERBOY');
// char.armor.setBodyArmor('Body Armor', 'LIGHT_ARMOR', 11, 0);
// char.armor.setHeadArmor('Head Armor', 'LIGHT_ARMOR', 11, 0);
// char.stats.setBodyStat(12);
// char.stats.setWillStat(8);
// char.stats.setEmpStat(5);
// char.stats.setIntStat(4);
// char.stats.setTechStat(8);
// char.setHumanity();
// char.setHitPoints();
// char.setAllWillSkills();
// char.setAllIntSkills();
// char.setAllEmpSkills();
// char.setAllTechSkills();
// char.setSkillRank('LAND_VEHICLE_TECH', 6);
// char.setSkillBaseTotal('LAND_VEHICLE_TECH');

// console.log(ArmorHandler.reduceTotalArmor(char.armor.getBodyArmorSP()!, 4));
// console.log(DamageHandler.reduceTotalHP(char.hitPoints, [10, 10, 10, 10], ArmorHandler.reduceTotalArmor(char.armor.getBodyArmorSP()!, 4), 4));
// char.armor.updateBodyArmorSP(ArmorHandler.reduceTotalArmor(char.armor.getBodyArmorSP()!, 4).at(-1)!);
