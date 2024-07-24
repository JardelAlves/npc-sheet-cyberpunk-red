<template>
  <div id="q-app" style="min-height: 100vh;">
    <div class="q-pa-md row items-top">
      <div class="col-auto">
        <q-btn icon="chevron_left" flat dense round @click="animateScroll('left')" />
      </div>
      <q-scroll-area ref="scrollAreaRef" class="col-10 scroll-area" @scroll="scroll" :visible="false">
        <div class="row no-wrap scroll-row">
          <q-chip icon="event">Add to calendar</q-chip>
          <q-chip icon="bookmark">Bookmark</q-chip>
          <q-chip icon="alarm" label="Set alarm"></q-chip>
          <q-chip class="glossy" icon="directions">Get directions</q-chip>
          <q-chip color="primary" text-color="white" icon="event">
            Add to calendar
          </q-chip>
          <q-chip color="teal" text-color="white" icon="bookmark">
            Bookmark
          </q-chip>
          <q-chip class="glossy" color="orange" text-color="white" icon-right="star">
            Star
          </q-chip>
          <q-chip color="red" text-color="white" icon="alarm" label="Set alarm"></q-chip>
          <q-chip color="deep-orange" text-color="white" icon="directions">
            Get directions
          </q-chip>
          <q-chip>
            <q-avatar icon="bookmark" color="red" text-color="white"></q-avatar>
            Bookmark
          </q-chip>
          <q-chip>
            <q-avatar color="red" text-color="white">50</q-avatar>
            Emails
          </q-chip>
          <q-chip>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar5.jpg">
            </q-avatar>
            John
          </q-chip>
        </div>
      </q-scroll-area>
      <div class="col-auto">
        <q-btn icon="chevron_right" flat dense round @click="animateScroll('right')" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const scrollAreaRef = ref(null)
const position = ref(0)
let once = false
const curPosPercentage = ref(0)
const totalWidth = ref(0)

onMounted(() => {
  const element = document.getElementsByClassName('q-scrollarea')
  console.log(element[0].children)
})

function scroll(sc: { horizontalPercentage: number; horizontalPosition: number; horizontalSize: number; }) {
  curPosPercentage.value = sc.horizontalPercentage
  position.value = sc.horizontalPosition
  if(!once){
    totalWidth.value = sc.horizontalSize
    once = true
  }
}
function animateScroll(dir: string) {
  if(dir === 'right'){
    curPosPercentage.value < 1 && (position.value = position.value + (totalWidth.value/6))
  }else{
    curPosPercentage.value > 0 && (position.value = position.value - (totalWidth.value/6))
  }
  scrollAreaRef.value.setScrollPosition('horizontal', position.value, 200)
}
</script>

<style scoped>
.scroll-area {
  height: 40px;
  max-width: 300px;
  background-color: grey;
}
.scroll-row {
  height: 40px;
}
.scroll-area > * {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-x: scroll;
}
div:deep(-webkit-scrollbar) {
  display: none; /* for Chrome, Safari, and Opera */
}
.scroll-row > * {
  height: auto;
}
</style>
