import ArmorModel from "@/models/armorModel";

export default class ArmorBuilder {
    public armorName!: string;
    public armorType!: string;
    public armorSP!: number;
    public armorPenalty!: number;
    public armorHitPoints!: number;

    addArmorName(armorName: string) {
        this.armorName = armorName
    }

    addArmorType(armorType: string) {
        this.armorType = armorType
    }

    addArmorSP(armorSP: number) {
        this.armorSP = armorSP
    }

    addArmorPenalty(armorPenalty: number) {
        this.armorPenalty = armorPenalty
    }

    addHitPoints(hitPoints: number) {
        this.armorHitPoints = hitPoints;
    }

    getArmor() {
        return new ArmorModel(this.armorName, this.armorType, this.armorPenalty, this.armorSP)
    }

    getShield() {
        return new ArmorModel(this.armorName, this.armorType, this.armorPenalty, undefined, this.armorHitPoints)
    }
}