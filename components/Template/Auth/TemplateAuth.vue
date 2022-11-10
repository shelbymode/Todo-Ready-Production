<script setup lang="ts">
import { TabGroup, TabList, TabPanels } from "@headlessui/vue";
</script>

<template>
    <div class="w-full h-full flex flex-col gap-y-5">
        <TabGroup>
            <TabList class="flex bg-light-50/20 rounded-3xl">
                <slot name="tabs-control"></slot>
            </TabList>

            <TabPanels class="flex flex-col h-full justify-center rounded-3xl bg-light-100/50">
                <slot name="tabs-content"></slot>
            </TabPanels>
        </TabGroup>
    </div>
</template>

<style lang="scss" scoped></style>
