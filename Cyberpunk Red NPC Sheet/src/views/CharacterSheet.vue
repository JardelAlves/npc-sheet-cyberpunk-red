<template>
    <v-row class="d-flex mt-5 mx-0 mb-0 justify-text-fields">
        <v-text-field
            v-model="textFieldINT"
            label="INT"
            class="mr-1"
            maxlength="2"
            counter
            @keypress="ruleStatsField($event)"
        >
        </v-text-field>
        <v-text-field
            v-model="textFieldREF"
            label="REF"
            class="mr-1"
            maxlength="2"
            counter
            @keypress="ruleStatsField($event)"
        />
        <v-text-field
            v-model="textFieldDEX"
            label="DEX"
            class="mr-1"
            maxlength="2"
            counter
            @keypress="ruleStatsField($event)"
        />
        <v-text-field
            v-model="textFieldTECH"
            label="TECH"
            class="mr-1"
            maxlength="2"
            counter
            @keypress="ruleStatsField($event)"
        />
        <v-text-field
            v-model="textFieldCOOL"
            label="COOL"
            maxlength="2"
            counter
            @keypress="ruleStatsField($event)"
        />
    </v-row>
    <v-row class="d-flex mt-5 mx-0 mb-0 justify-text-fields">
        <v-text-field
            v-model="textFieldWILL"
            label="WILL"
            class="mr-1"
            maxlength="2"
            counter
            @keypress="ruleStatsField($event)"
        />
        <v-text-field
            v-model="textFieldLUCK"
            label="LUCK"
            class="mr-1"
            maxlength="2"
            counter
            @keypress="ruleStatsField($event)"
        />
        <v-text-field
            v-model="textFieldMOVE"
            label="MOVE"
            class="mr-1"
            maxlength="2"
            counter
            @keypress="ruleStatsField($event)"
        />
        <v-text-field
            v-model="textFieldBODY"
            label="BODY"
            class="mr-1"
            maxlength="2"
            counter
            @keypress="ruleStatsField($event)"
        />
        <v-text-field
            v-model="textFieldEMP"
            label="EMP"
            maxlength="2"
            counter
            @keypress="ruleStatsField($event)"
        />
    </v-row>
    <v-divider />
    <v-row class="my-0 mx-0">
        <v-card class="mt-5 mr-5" width="300">
            <template v-slot:title>
                <div style="text-align: center">Hit Points</div>
                <v-divider class="mb-3"></v-divider>
            </template>

            <template v-slot:text>
                <v-row class="mx-1">
                    <v-text-field
                        v-model="currentHitPoints"
                        label="Current hit points"
                        variant="underlined"
                        class="mr-5"
                    />
                    <v-text-field
                        label="Hit points"
                        variant="plain"
                        v-model="getTotalHitPoints"
                        :disabled="true"
                    />
                </v-row>
            </template>
        </v-card>

        <v-card class="mt-5">
            <template v-slot:title>
                <div style="text-align: center">Armour</div>
                <v-divider class="mb-3"></v-divider>
            </template>

            <template v-slot:text>
                <v-row class="mx-1">
                    <v-text-field v-model="headArmor" class="mr-5" label="Head" type="number" />
                    <v-text-field v-model="bodyArmor" class="mr-5" label="Body" type="number" />
                    <v-text-field v-model="shield" label="Shield" type="number" />
                </v-row>
            </template>
        </v-card>
    </v-row>
    <v-divider class="mt-5" />
    <div class="text-center">
        <v-btn color="#CD2417" variant="outlined" class="mt-5" @click="dialog = true">
            Take Damage
        </v-btn>
        <v-btn color="#7286A0" variant="outlined" class="mt-5" @click="dialogSkills = true">
            Check Skills
        </v-btn>
        <v-dialog v-model="dialog" width="500" height="360">
            <v-card>
                <template v-slot:title>
                    <div style="text-align: center">Damage</div>
                    <v-divider class="mb-3" />
                </template>

                <div class="mx-5">
                    <v-text-field v-model.number="damageTaken" type="number" label="Damage" />
                </div>
                <v-checkbox
                    v-model="isMeleeDamage"
                    class="mx-5"
                    label="Is melee damage?"
                    width="100"
                    hide-details
                />
                <v-checkbox
                    v-model="isAmmoPiercing"
                    class="mx-5 my-0"
                    label="Is ammunition armour-piercing?"
                    width="100"
                    hide-details
                />
                <v-checkbox
                    v-if="shield > 0"
                    v-model="isDamagingShield"
                    class="mx-5 my-0"
                    label="Is shield taking damage?"
                    width="100"
                    hide-details
                />
                <v-card-actions class="justify-center">
                    <v-btn color="red" @click="dialog = false">Cancel</v-btn>
                    <v-btn color="green" @click="applyDamage()">Apply Damage</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialogSkills" width="1000" height="600">
            <skills-modal
                :character-skills="char.skills"
                @edit-skill="editSkill"
                @close="closeSkillsDialog"
            />
        </v-dialog>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Character from '@/models/character'
import ArmorHandler from '@/handlers/armorHandler'
import DamageHandler from '@/handlers/damageHandler'
import SkillsModal from '@/components/SkillsModal.vue'
import { setAllBaseStatRank } from '@/helpers/skills.handlers'

type CharacterLocalStorage = {
    characterInt: Number
    characterRef: Number
    characterDex: Number
    characterTech: Number
    characterCool: Number
    characterWill: Number
    characterLuck: Number
    characterMove: Number
    characterBody: Number
    characterEmp: Number
    currentHitPoints: Number
    headArmor: Number
    bodyArmor: Number
    shield: Number
}

export default defineComponent({
    components: { SkillsModal },
    props: {
        characterKey: { type: String, require: true },
        characterName: { type: String, require: true }
    },

    data() {
        return {
            textFieldINT: 0 as number,
            textFieldREF: 0,
            textFieldDEX: 0,
            textFieldTECH: 0,
            textFieldCOOL: 0,
            textFieldWILL: 0,
            textFieldLUCK: 0,
            textFieldMOVE: 0,
            textFieldBODY: 0,
            textFieldEMP: 0,
            currentHitPoints: 0,
            damageTaken: 0,
            isMeleeDamage: false,
            isAmmoPiercing: false,
            isDamagingShield: false,
            char: new Character(),
            dialog: false,
            dialogSkills: false,
            tabModel: 'awareness',
            headArmor: 0,
            bodyArmor: 0,
            shield: 0,
            characterData: {} as CharacterLocalStorage
        }
    },

    computed: {
        getTotalHitPoints() {
            return this.char.hitPoints
        }
    },

    methods: {
        ruleStatsField(event: KeyboardEvent) {
            if (!/^[-+]?[0-9]*\.?[0-9]*$/.test(event.key)) {
                event.preventDefault()
            } else {
                return true
            }
        },
        applyDamage() {
            this.dialog = false
            if (this.isDamagingShield) {
                this.shield = DamageHandler.reduceTotalHP(this.shield, [this.damageTaken], [0], 1)
            } else if (this.isMeleeDamage) {
                this.currentHitPoints = DamageHandler.reduceTotalHP(
                    this.currentHitPoints,
                    [this.damageTaken],
                    ArmorHandler.ignoreHalfArmor(this.char.armor.getBodyArmorSP()!, 1),
                    1
                )
                this.bodyArmor = ArmorHandler.reduceFinalArmor(this.char.armor.getBodyArmorSP()!, 1)
            } else if (this.isAmmoPiercing) {
                this.currentHitPoints = DamageHandler.reduceTotalHP(
                    this.currentHitPoints,
                    [this.damageTaken],
                    ArmorHandler.reduceTotalArmor(this.char.armor.getBodyArmorSP()!, 1),
                    1
                )
                this.bodyArmor = ArmorHandler.reduceFinalArmor(
                    this.char.armor.getBodyArmorSP()!,
                    1,
                    true
                )
            } else {
                this.currentHitPoints = DamageHandler.reduceTotalHP(
                    this.currentHitPoints,
                    [this.damageTaken],
                    ArmorHandler.reduceTotalArmor(this.char.armor.getBodyArmorSP()!, 1),
                    1
                )
                this.bodyArmor = ArmorHandler.reduceFinalArmor(this.char.armor.getBodyArmorSP()!, 1)
            }
            this.resetDamageConditions()
        },
        editSkill(teste: string, teste1: string, teste2: number) {
            console.log(teste, teste1, teste2);
            this.char.skills[teste][teste1].setSkillRank(teste2)
            console.log(this.char.skills[teste][teste1])
        },
        closeSkillsDialog() {
            this.dialogSkills = false;
        },
        resetDamageConditions() {
            this.damageTaken = 0
            this.isMeleeDamage = false
            this.isAmmoPiercing = false
            this.isDamagingShield = false
        },
        getDataLocalStorage(): string {
            return JSON.stringify({
                name: this.characterName,
                characterInt: this.textFieldINT,
                characterRef: this.textFieldREF,
                characterDex: this.textFieldDEX,
                characterTech: this.textFieldTECH,
                characterCool: this.textFieldCOOL,
                characterWill: this.textFieldWILL,
                characterLuck: this.textFieldLUCK,
                characterMove: this.textFieldMOVE,
                characterBody: this.textFieldBODY,
                characterEmp: this.textFieldEMP,
                currentHitPoints: this.currentHitPoints,
                headArmor: this.headArmor,
                bodyArmor: this.bodyArmor,
                shield: this.shield
            })
        }
    },

    mounted() {
        const teste = localStorage.getItem(this.characterKey!)
        if (teste !== undefined) {
            const final = JSON.parse(teste!)
            console.log(final)
            this.bodyArmor = final.bodyArmor
            this.headArmor = final.headArmor
            this.shield = final.shield
            this.textFieldINT = final.characterInt
            this.textFieldREF = final.characterRef
            this.textFieldDEX = final.characterDex
            this.textFieldTECH = final.characterTech
            this.textFieldCOOL = final.characterCool
            this.textFieldWILL = final.characterWill
            this.textFieldLUCK = final.characterLuck
            this.textFieldMOVE = final.characterMove
            this.textFieldBODY = final.characterBody
            this.textFieldEMP = final.characterEmp
            this.char.armor.setBodyArmor('Body Armor', 'BODY', final.bodyArmor, 0)
            this.char.armor.setHeadArmor('Head Armor', 'HEAD', final.headArmor, 0)
            this.currentHitPoints = final.currentHitPoints
        } else {
            this.char.armor.setBodyArmor('Body Armor', 'BODY', 0, 0)
            this.char.armor.setHeadArmor('Head Armor', 'HEAD', 0, 0)
            this.currentHitPoints = this.char.hitPoints
        }
        this.char.setHitPoints()
    },

    watch: {
        textFieldINT(newValue: string) {
            if (newValue.length === 0) newValue = '0'
            this.char.stats.setIntStat(parseInt(newValue))
            Object.keys(this.char.skills).forEach((stat) => {
                setAllBaseStatRank(this.char.skills[stat], { stat: 'INT', rank: Number(newValue) })
            })
            localStorage.setItem(this.characterKey!, this.getDataLocalStorage())
        },
        textFieldREF(newValue: string) {
            if (newValue.length === 0) newValue = '0'
            this.char.stats.setRefStat(parseInt(newValue))
            Object.keys(this.char.skills).forEach((stat) => {
                setAllBaseStatRank(this.char.skills[stat], { stat: 'REF', rank: Number(newValue) })
            })
            localStorage.setItem(this.characterKey!, this.getDataLocalStorage())
        },
        textFieldDEX(newValue: string) {
            if (newValue.length === 0) newValue = '0'
            this.char.stats.setDexStat(parseInt(newValue))
            Object.keys(this.char.skills).forEach((stat) => {
                setAllBaseStatRank(this.char.skills[stat], { stat: 'DEX', rank: Number(newValue) })
            })
            localStorage.setItem(this.characterKey!, this.getDataLocalStorage())
        },
        textFieldTECH(newValue: string) {
            if (newValue.length === 0) newValue = '0'
            this.char.stats.setTechStat(parseInt(newValue))
            Object.keys(this.char.skills).forEach((stat) => {
                setAllBaseStatRank(this.char.skills[stat], { stat: 'TECH', rank: Number(newValue) })
            })
            localStorage.setItem(this.characterKey!, this.getDataLocalStorage())
        },
        textFieldCOOL(newValue: string) {
            if (newValue.length === 0) newValue = '0'
            this.char.stats.setCoolStat(parseInt(newValue))
            Object.keys(this.char.skills).forEach((stat) => {
                setAllBaseStatRank(this.char.skills[stat], { stat: 'COOL', rank: Number(newValue) })
            })
            localStorage.setItem(this.characterKey!, this.getDataLocalStorage())
        },
        textFieldWILL(newValue: string) {
            if (newValue.length === 0) newValue = '0'
            this.char.stats.setWillStat(parseInt(newValue))
            Object.keys(this.char.skills).forEach((stat) => {
                setAllBaseStatRank(this.char.skills[stat], { stat: 'WILL', rank: Number(newValue) })
            })
            this.char.setHitPoints()
            localStorage.setItem(this.characterKey!, this.getDataLocalStorage())
        },
        textFieldLUCK(newValue: string) {
            if (newValue.length === 0) newValue = '0'
            this.char.stats.setLuckStat(parseInt(newValue))
            Object.keys(this.char.skills).forEach((stat) => {
                setAllBaseStatRank(this.char.skills[stat], { stat: 'LUCK', rank: Number(newValue) })
            })
            localStorage.setItem(this.characterKey!, this.getDataLocalStorage())
        },
        textFieldMOVE(newValue: string) {
            if (newValue.length === 0) newValue = '0'
            this.char.stats.setMoveStat(parseInt(newValue))
            localStorage.setItem(this.characterKey!, this.getDataLocalStorage())
        },
        textFieldBODY(newValue: string) {
            if (newValue.length === 0) newValue = '0'
            this.char.stats.setBodyStat(parseInt(newValue))
            Object.keys(this.char.skills).forEach((stat) => {
                setAllBaseStatRank(this.char.skills[stat], { stat: 'BODY', rank: Number(newValue) })
            })
            this.char.setHitPoints()
            localStorage.setItem(this.characterKey!, this.getDataLocalStorage())
        },
        textFieldEMP(newValue: string) {
            if (newValue.length === 0) newValue = '0'
            this.char.stats.setEmpStat(parseInt(newValue))
            Object.keys(this.char.skills).forEach((stat) => {
                setAllBaseStatRank(this.char.skills[stat], { stat: 'EMP', rank: Number(newValue) })
            })
            localStorage.setItem(this.characterKey!, this.getDataLocalStorage())
        },
        bodyArmor(newValue: number) {
            this.char.armor.setBodyArmor('Body Armor', 'LIGHT_ARMOR', newValue, 0)
            localStorage.setItem(this.characterKey!, this.getDataLocalStorage())
        },
        headArmor(newValue: number) {
            this.char.armor.setHeadArmor('Head Armor', 'LIGHT_ARMOR', newValue, 0)
            localStorage.setItem(this.characterKey!, this.getDataLocalStorage())
        },
        shield(newValue: number) {
            this.char.armor.setShield('Shield', 'SHIELD', newValue, 0)
            localStorage.setItem(this.characterKey!, this.getDataLocalStorage())
        },
        currentHitPoints() {
            localStorage.setItem(this.characterKey!, this.getDataLocalStorage())
        }
    }
})
</script>

<style scoped>
.justify-text-fields {
    justify-content: space-around;
}
</style>
