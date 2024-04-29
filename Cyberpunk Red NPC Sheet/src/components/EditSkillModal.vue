<template>
    <v-card>
        <template v-slot:title>
            <div style="text-align: center">Edit Skill ({{ skill.name }})</div>
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
        <v-divider class="mt-2" />
        <v-text-field
            v-model="newSkillValue"
            class="mx-5 mt-2"
            label="New value"
            maxlength="2"
            counter
            @keypress="ruleStatsField($event)"
        />
        <v-card-actions class="justify-center">
            <v-btn color="green" @click="$emit('applyValue', newSkillValue)">Apply</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        skill: {
            required: true
        }
    },

    data() {
        return {
            newSkillValue: 0 as number
        }
    },
    methods: {
        ruleStatsField(event: KeyboardEvent) {
            if (!/^[-+]?[0-9]*\.?[0-9]*$/.test(event.key)) {
                event.preventDefault()
            } else {
                return true
            }
        }
    }
})
</script>

<style scoped>
</style>