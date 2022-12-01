<script setup lang="ts">
const props = defineProps<{
    id: string;
    isDone: boolean;
    task: string;
}>();

const rotateFactor = Math.round(Math.random()) === 0 ? "X" : "Y";
const rotateStart = `rotate${rotateFactor}(0deg)`;
const rotateEnd = `rotate${rotateFactor}(360deg)`;

const isChecked = ref(props.isDone);
const transformSurface = ref<HTMLElement>();
const borderColor = "rgba(22,22,22,0.9)";

function showPresentation() {
    transformSurface.value.style.animationPlayState = "running";
}
</script>

<template>
    <div
        ref="transformSurface"
        class="swap-presentation w-full flex py-3 border-2 transition-300 border-x-none items-center justify-between"
        :hover="'bg-light-700 cursor-pointer scale-105'"
        @mouseenter="showPresentation"
    >
        <AtomVCheckbox :id="props.id" v-model:isChecked="isChecked">
            <template #content>
                <p
                    class="transition-800"
                    :class="{ 'line-through': isChecked }"
                    text="4xl"
                >
                    {{ props.task }}
                </p>
            </template>
        </AtomVCheckbox>
        <div class="flex pr-5 gap-x-3 items-center">
            <span class="text-3xl" i-carbon-edit></span>
            <span class="text-3xl" i-carbon-close></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.swap-presentation {
    animation: swap 1s ease-in-out both paused;
    border-color: v-bind(borderColor);
}

@keyframes swap {
    from {
        transform: v-bind(rotateStart);
    }
    to {
        transform: v-bind(rotateEnd);
    }
}
</style>
