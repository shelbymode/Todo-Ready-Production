<script setup lang="ts">
import { StatusBar } from "~~/components/Organism/Todo/OrganismTodoList.vue";

const props = defineProps<{
    data: StatusBar;
}>();
</script>

<template>
    <h1>{{ props.data }}</h1>
</template>

<style lang="scss" scoped></style>
