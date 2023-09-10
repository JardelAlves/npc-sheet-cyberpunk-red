<template>
    <div class="about">
        <h1>This is an about page</h1>
        <v-btn @click="teste"></v-btn>
    </div>
</template>

<script lang="ts">
import DamageHandler from '@/handlers/damageHandler'
import ArmorHandler from '@/handlers/armorHandler'

export default {
    methods: {
        teste() {
            console.log(ArmorHandler.reduceFinalArmor(7, 4, true))
        }
    }
}
</script>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
