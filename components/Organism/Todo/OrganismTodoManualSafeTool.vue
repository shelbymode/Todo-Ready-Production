<script setup lang="ts"></script>

<template>
    <fieldset id="radio" class="flex flex-col gap-y-15" align="left">
        <legend text-2xl>Manual safe tool</legend>

        <div>
            <button class="cybr-btn py-4 px-15 text-xl">Undo</button>
        </div>

        <div>
            <button class="cybr-btn py-4 px-15 text-xl">Redo</button>
        </div>

        <div>
            <button class="cybr-btn py-4 px-15 text-xl">Save</button>
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
