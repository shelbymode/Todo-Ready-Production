<script setup lang="ts">
function getAllTodos() {
    // storeUser.getOneUser("43cfef97-1289-4bc9-9b4c-f14932c7c827");
}
</script>

<template>
    <div class="flex items-center gap-x-10">
        <MoleculeVCyberInput />
        <AtomVButton name="Add task" @click="getAllTodos" />
    </div>
</template>

<style lang="scss" scoped></style>
