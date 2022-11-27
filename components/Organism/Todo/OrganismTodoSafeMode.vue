<script setup lang="ts"></script>

<template>
    <fieldset id="radio" class="flex flex-col gap-y-6" align="left">
        <legend text-2xl>Safe Mode</legend>

        <div>
            <input
                id="safe-mode-auto"
                class="cybr-radio"
                name="safe-mode-group"
                type="radio"
                checked
            />
            <label class="cybr-label text-white" for="safe-mode-auto"
                >Auto</label
            >
        </div>

        <div>
            <input
                id="safe-mode-manual"
                class="cybr-radio"
                name="safe-mode-group"
                type="radio"
            />
            <label class="cybr-label text-white" for="safe-mode-manual"
                >Manual</label
            >
        </div>
    </fieldset>
</template>

<style lang="scss" scoped>
.root {
    background-color: black;
    color: #fff;
}

fieldset {
    border: 3px groove #fff;
    color: #fff;
    padding: 2em;
}

legend {
    padding: 0 1em;
}
</style>
