import type ArmorModel from "./armorModel";
import ArmorBuilder from "@/handlers/armorBuilder";


export default class CharacterArmor {
    private body!: ArmorModel;
    private head!: ArmorModel;
    private shield?: ArmorModel;
    private armorBuilder: ArmorBuilder;

    constructor() {
        this.armorBuilder = new ArmorBuilder();
    }

    setBodyArmor(armorName: string, armorType: string, armorSP: number, armorPenalty: number) {
        this.armorBuilder.setArmor(armorName, armorType, armorSP, armorPenalty);
        this.body = this.armorBuilder.getArmor();
        return this;
    }

    setHeadArmor(armorName: string, armorType: string, armorSP: number, armorPenalty: number) {
        this.armorBuilder.setArmor(armorName, armorType, armorSP, armorPenalty);
        this.head = this.armorBuilder.getArmor();
        return this;
    }

    setShield(armorName: string, armorType: string, armorHitPoints: number, armorPenalty: number) {
        this.armorBuilder.setShield(armorName, armorType, armorHitPoints, armorPenalty);
        this.shield = this.armorBuilder.getShield();
        return this;
    }

    updateBodyArmorSP(SP: number) {
        this.body.SP = SP;
        return this;
    }

    updateHeadArmorSP(SP: number) {
        this.head.SP = SP;
        return this;
    }

    updateShieldHP(HP: number) {
        this.shield!.HP = HP;
        return this;
    }

    getBodyArmorSP() {
        return this.body.SP;
    }

    getHeadArmorSP() {
        return this.head.SP;
    }

    getShieldHP() {
        return this.shield?.HP;
    }
}