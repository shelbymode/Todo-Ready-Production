<script setup lang="ts"></script>

<template>
    <div id="input-normal" class="flex flex-col items-start gap-y-5">
        <label class="cybr-label cybr-bm">New task</label>
        <div class="cybr-input-wrapper">
            <input type="string" name="Test" class="cybr-input text-2xl" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
input:focus {
    outline: none;
}
</style>
