<script setup lang="ts">
const myProps = defineProps<{
  work?: boolean;
  title: string;
  subtitle: {
    icon: string;
    text: string;
    large?: boolean;
  }[];
  text: string;
  action?: {
    type: string;
    link: string;
  }[];
}>();
</script>

<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        v-bind="props"
        class="px-3 py-7 my-5 move-up-animation cursor-pointer position-relative"
        :class="{ 'elevation-24 move-up': isHovering }"
      >
        <v-alert
          v-if="myProps.work"
          class="position-absolute py-0 text-caption"
          color="red"
          density="compact"
          variant="tonal"
          style="top: 0; left: 0"
          v-tooltip="{
            contentClass: 'bg-red-darken-3  opacity-70 text-caption',
            text: 'This project was developed during my employment and cannot be shared due to company confidentiality policies.',
          }"
        >
          <v-icon icon="mdi-alert-outline" size="small" class="mr-1"></v-icon>in Nidec</v-alert
        >
        <v-card-subtitle class="d-flex opacity-100">
          <div class="mr-3" v-for="(s, sIdx) in subtitle" :key="`subtitle_${sIdx}`" style="font-size: 1rem">
            <img class="logo" :class="{ 'large-logo': s.large }" :src="s.icon" />{{ s.text }}
          </div>
        </v-card-subtitle>
        <v-card-title class="py-0 font-weight-bold"
          ><h3>{{ myProps.title }}</h3></v-card-title
        >
        <v-card-text class="py-2 text-medium-emphasis text-justify whitespace-pre-wrap">
          <p v-html="myProps.text"></p>
          <div class="mt-2 d-flex">
            <div v-for="(a, aIdx) in action" :key="`action_${aIdx}`" class="mr-4">
              <v-icon class="mr-1" :icon="a.type == 'CODE' ? 'mdi-xml' : 'mdi-television'"></v-icon>
              <a :href="a.link" target="_blank" class="text-decoration-none text-white">{{
                a.type == 'CODE' ? 'Code' : 'View App'
              }}</a>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </template>
  </v-hover>
</template>

<style scoped>
.logo {
  height: 1rem;
  width: 1rem;
  margin-right: 0.2rem;
}
.large-logo {
  width: 2rem;
  height: 1rem;
}
.move-up {
  transform: translateY(-5px);
}
.move-up-animation {
  transition: transform 0.2s linear;
}
</style>
