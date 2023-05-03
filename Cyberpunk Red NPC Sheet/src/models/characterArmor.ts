import type ArmorModel from "./armorModel";
import ArmorBuilder from "@/handlers/armorBuilder";

const armorBuilder = new ArmorBuilder();

export default class CharacterArmor {
    public body!: ArmorModel;
    public head!: ArmorModel;
    public shield?: ArmorModel;

    setBodyArmor(armorName: string, armorType: string, armorSP: number, armorPenalty: number) {
        armorBuilder.addArmorName(armorName);
        armorBuilder.addArmorType(armorType);
        armorBuilder.addArmorSP(armorSP);
        armorBuilder.addArmorPenalty(armorPenalty);
        this.body = armorBuilder.getArmor();
    }

    setHeadArmor(armorName: string, armorType: string, armorSP: number, armorPenalty: number) {
        armorBuilder.addArmorName(armorName);
        armorBuilder.addArmorType(armorType);
        armorBuilder.addArmorSP(armorSP);
        armorBuilder.addArmorPenalty(armorPenalty);
        this.head = armorBuilder.getArmor();
    }

    setShield(armorName: string, armorType: string, armorHitPoints: number, armorPenalty: number) {
        armorBuilder.addArmorName(armorName);
        armorBuilder.addArmorType(armorType);
        armorBuilder.addArmorPenalty(armorPenalty);
        armorBuilder.addHitPoints(armorHitPoints);
        this.shield = armorBuilder.getShield();
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