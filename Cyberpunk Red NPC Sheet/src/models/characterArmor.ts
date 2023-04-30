import ArmorBuilder from "@/handlers/armorBuilder";

export default class CharacterArmor {
    public body!: object;
    public head!: object;
    public shield?: object;
    private armorBuilder = new ArmorBuilder();

    setBodyArmor(armorName: string, armorType: string, armorSP: number, armorPenalty: number) {
        this.armorBuilder.addArmorName(armorName);
        this.armorBuilder.addArmorType(armorType);
        this.armorBuilder.addArmorSP(armorSP);
        this.armorBuilder.addArmorPenalty(armorPenalty);
        this.body = this.armorBuilder.getArmor();
    }

    setHeadArmor(armorName: string, armorType: string, armorSP: number, armorPenalty: number) {
        this.armorBuilder.addArmorName(armorName);
        this.armorBuilder.addArmorType(armorType);
        this.armorBuilder.addArmorSP(armorSP);
        this.armorBuilder.addArmorPenalty(armorPenalty);
        this.head = this.armorBuilder.getArmor();
    }

    setShield(armorName: string, armorType: string, armorHitPoints: number, armorPenalty: number) {
        this.armorBuilder.addArmorName(armorName);
        this.armorBuilder.addArmorType(armorType);
        this.armorBuilder.addArmorPenalty(armorPenalty);
        this.armorBuilder.addHitPoints(armorHitPoints);
        this.shield = this.armorBuilder.getShield();
    }
}