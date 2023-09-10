import ArmorModel from "@/models/armorModel";

export default class ArmorBuilder {
    private armorName!: string;
    private armorType!: string;
    private armorSP!: number;
    private armorPenalty!: number;
    private armorHitPoints!: number;

    private ArmorBuilder() {}

    addArmorName(armorName: string) {
        this.armorName = armorName;
        return this;
    }

    addArmorType(armorType: string) {
        this.armorType = armorType;
        return this;
    }

    addArmorSP(armorSP: number) {
        this.armorSP = armorSP;
        return this;
    }

    addArmorPenalty(armorPenalty: number) {
        this.armorPenalty = armorPenalty;
        return this;
    }

    addHitPoints(hitPoints: number) {
        this.armorHitPoints = hitPoints;
        return this;
    }

    setArmor(armorName: string, armorType: string, armorSP: number, armorPenalty: number) {
        this.addArmorName(armorName).addArmorType(armorType).addArmorSP(armorSP).addArmorPenalty(armorPenalty);
        return this;
    }

    setShield(armorName: string, armorType: string, armorHitPoints: number, armorPenalty: number) {
        this.addArmorName(armorName).addArmorType(armorType).addArmorPenalty(armorPenalty).addHitPoints(armorHitPoints);
        return this;
    }

    getArmor() {
        return new ArmorModel(this.armorName, this.armorType, this.armorPenalty, this.armorSP)
    }

    getShield() {
        return new ArmorModel(this.armorName, this.armorType, this.armorPenalty, undefined, this.armorHitPoints)
    }
}