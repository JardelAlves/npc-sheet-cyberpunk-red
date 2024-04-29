<template>
    <v-card>
        <template v-slot:title>
            <div style="text-align: center">Skills</div>
        </template>
        <template v-slot:append>
            <div class="me-n2">
                <v-btn
                    icon="$close"
                    density="comfortable"
                    variant="plain"
                    @click="$emit('close')"
                />
            </div>
        </template>
        <v-divider />
        <div class="d-flex flex-row">
            <v-tabs direction="vertical" color="#CD2417" v-model="tabModel" class="my-0">
                <v-tab value="awareness">Awareness</v-tab>
                <v-tab value="body">Body</v-tab>
                <v-tab value="control">Control</v-tab>
                <v-tab value="education">Education</v-tab>
                <v-tab value="fighting">Fighting</v-tab>
                <v-tab value="performance">Performance</v-tab>
                <v-tab value="rangedWeapon">Ranged Weapon</v-tab>
                <v-tab value="social">Social</v-tab>
                <v-tab value="technique">Technique</v-tab>
            </v-tabs>
            <v-divider vertical />
            <v-window v-model="tabModel" style='width: 100%'>
                <v-window-item v-for="info in tabInformation" v-bind:key="info" :value="info">
                    <v-data-table-virtual
                        :headers="headers"
                        :items="getTabsContents(characterSkills[info])"
                    >
                        <template v-slot:item.actions="{ item }">
                            <v-btn
                                density="comfortable"
                                icon="mdi-pencil"
                                variant="plain"
                                @click="editSkill(item, info)"
                            />
                        </template>
                    </v-data-table-virtual>
                    <v-dialog v-model="dialogEditSkillValue" width="auto" :persistent="true">
                        <edit-skill-modal
                            :skill="editableSkill"
                            @apply-value="applySkillValue"
                            @close="changeEditSkillValueDialog"
                        />
                    </v-dialog>
                </v-window-item>
            </v-window>
        </div>
    </v-card>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { getTableTabInformation } from '@/helpers/skills.handlers'
import type { SkillsType } from '@/schemas/skill.schema'
import type CharacterSkillStructure from '@/classes/characterSkills.classes'
import EditSkillModal from '@/components/EditSkillModal.vue'

export default defineComponent({
    components: { EditSkillModal },
    props: {
        characterSkills: {
            type: Object as PropType<SkillsType>,
            required: true
        }
    },

    data() {
        return {
            dialogSkills: false,
            dialogEditSkillValue: false,
            editableSkill: {} as object | undefined,
            skillTypePath: '' as string,
            skillBasePath: '' as string,
            tabModel: 'awareness',
            headers: [
                { title: 'Skill', key: 'skill', align: 'start', sortable: 'false', value: 'name' },
                { title: 'LVL', key: 'lvl', align: 'end', sortable: 'false' },
                { title: 'STAT', key: 'stat', align: 'end', sortable: 'false' },
                { title: 'BASE', key: 'base', align: 'end', sortable: 'false' },
                { title: '', key: 'actions', align: 'end', sortable: 'false' },
            ],
            tabInformation: ['awareness', 'body', 'control', 'education', 'fighting', 'performance', 'rangedWeapon', 'social', 'technique']
        }
    },
    methods: {
        getTabsContents(skill: Record<string, CharacterSkillStructure>): Array<object> {
            return getTableTabInformation(skill);
        },
        changeEditSkillValueDialog() {
            this.dialogEditSkillValue = !this.dialogEditSkillValue;
        },
        editSkill(item: object, skill: string) {
            this.editableSkill = item;
            this.skillTypePath = skill;
            this.skillBasePath = item.skill;
            this.changeEditSkillValueDialog();
        },
        applySkillValue(newValue: number) {
            this.$emit('edit-skill', this.skillTypePath, this.skillBasePath, Number(newValue))
            this.changeEditSkillValueDialog();
        }
    }
})
</script>

<style scoped>
</style>