<template>
    <div>
        <v-sheet class="mt-0" width="1038.4">
            <v-slide-group v-model="currentCharacter" show-arrows>
                <v-slide-group-item
                    v-for="character in characterSheetList"
                    :key="character.key.toString"
                    v-slot="{ isSelected, toggle }"
                >
                    <v-btn
                        class="ma-2"
                        size="small"
                        rounded
                        :color="isSelected ? '#CD2417' : '#181818'"
                        @click="toggle"
                    >
                        {{ character.name }}
                    </v-btn>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
        <div class="d-flex mt-1 justify-buttons">
            <v-btn size="small" class="mr-1" variant="outlined" @click="dialog = true">
                Add character
            </v-btn>
            <v-btn
                size="small"
                variant="outlined"
                :disabled="characterSheetList.length === 0"
                @click="removeCharacter(currentCharacter)"
            >
                Remove character
            </v-btn>
        </div>
        <v-divider class="mt-5" />
        <v-window v-model="currentCharacter" :key="componentKey">
            <v-window-item v-for="character in characterSheetList" :key="character.key.toString">
                <CharacterSheet
                    :character-key="character.key.toString()"
                    :character-name="character.name.toString()"
                />
            </v-window-item>
        </v-window>
        <v-dialog v-model="dialog" width="500" height="360">
            <v-card>
                <template v-slot:title>
                    <div style="text-align: center">Create New Character</div>
                    <v-divider class="mb-3" />
                </template>

                <div class="mx-5">
                    <v-text-field v-model="characterName" label="Character Name" />
                </div>
                <v-card-actions class="justify-center">
                    <v-btn color="red" @click="dialog = false">Cancel</v-btn>
                    <v-btn color="green" @click="addNewCharacter()">Create</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import CharacterSheet from '@/views/CharacterSheet.vue'
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'
import { defineComponent } from 'vue';

const componentKey = ref(0)

type CharacterList = {
    name: String
    key: String
    content: typeof CharacterSheet
}

export default defineComponent({
    components: { CharacterSheet },

    data() {
        return {
            characterSheetList: [] as CharacterList[],
            currentCharacter: 0 as number,
            characterName: '' as String,
            dialog: false,
            componentKey
        }
    },

    methods: {
        addNewCharacter() {
            const character: CharacterList = {
                name: this.characterName,
                key: uuidv4(),
                content: CharacterSheet
            }
            this.characterSheetList.push(character)
            localStorage.setItem(
                character.key.toString(),
                JSON.stringify({
                    name: this.characterName,
                    characterBody: 0,
                    characterWill: 0,
                    currentHitPoints: 0,
                    headArmor: 0,
                    bodyArmor: 0,
                    shield: 0
                })
            )
            this.dialog = false
            this.characterName = ''
            this.currentCharacter = this.characterSheetList.length - 1
        },
        removeCharacter(index: number) {
            localStorage.removeItem(this.characterSheetList[index].key.toString())
            this.characterSheetList.splice(index, 1)
            this.forceRerender()
            this.currentCharacter = this.characterSheetList.length + 1
        },
        retrieveCharacter(characterKey: String, characterName: String) {
            const character: CharacterList = {
                name: characterName,
                key: characterKey,
                content: CharacterSheet
            }
            this.characterSheetList.push(character)
        },
        forceRerender() {
            componentKey.value += 1
        }
    },

    created() {
        if (localStorage.length > 0) {
            for (let counter = 0; counter < localStorage.length; counter++) {
                let characterKey = localStorage.key(counter)
                const character = JSON.parse(localStorage.getItem(characterKey!)!)
                this.retrieveCharacter(characterKey!, character.name)
            }
        }
    }
})
</script>

<style scoped>
.justify-buttons {
    justify-content: center;
}
.justify-text-fields {
    justify-content: space-around;
}
</style>
