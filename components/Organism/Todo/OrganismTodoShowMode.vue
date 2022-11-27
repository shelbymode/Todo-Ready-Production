<script setup lang="ts"></script>

<template>
    <fieldset id="radio" class="flex flex-col gap-y-6" align="left">
        <legend text-2xl>Show Mode</legend>

        <div>
            <input
                id="show-mode-all"
                class="cybr-radio"
                name="show-mode-group"
                type="radio"
                checked
            />
            <label class="cybr-label text-white" for="show-mode-all">All</label>
        </div>

        <div>
            <input
                id="show-mode-rest"
                class="cybr-radio"
                name="show-mode-group"
                type="radio"
            />
            <label class="cybr-label text-white" for="show-mode-rest"
                >Rest</label
            >
        </div>

        <div>
            <input
                id="show-mode-completed"
                class="cybr-radio"
                name="show-mode-group"
                type="radio"
            />
            <label class="cybr-label text-white" for="show-mode-completed"
                >Completed</label
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
