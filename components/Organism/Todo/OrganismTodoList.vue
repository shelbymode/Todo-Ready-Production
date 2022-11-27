<script setup lang="ts">
export interface IItem {
    id: string;
    isDone: boolean;
    task: string;
}
export interface StatusBar {
    summary: number;
    active: number;
}

const props = defineProps<{
    items: IItem[];
}>();

function calcStatusBar(items: IItem[]) {
    return items.reduce(
        (acc, cur) => {
            if (cur.isDone) acc.active++;
            return acc;
        },
        {
            summary: props.items.length,
            active: 0,
        }
    );
}

const reactiveCalcStatusBar = reactify(calcStatusBar);
const statusBarData = reactiveCalcStatusBar(props.items);
</script>

<template>
    <TemplateTodoList>
        <template #title>
            <h1 class="text-6xl text-black font-bold">TODO LIST</h1>
        </template>

        <template #search>
            <MoleculeTodoSearch />
        </template>

        <template #items>
            <MoleculeTodoItem v-for="item in props.items" :id="item.id" :key="item.id" :is-done="item.isDone" :task="item.task" />
        </template>

        <template #status-bar>
            <MoleculeVStatusBar :data="statusBarData" />
        </template>

        <template #pagination>
            <OrganismVPagination />
        </template>

        <template #safe-mode>
            <OrganismTodoSafeMode />
        </template>

        <template #show-mode>
            <OrganismTodoShowMode />
        </template>

        <template #manual-safe-tool>
            <OrganismTodoManualSafeTool />
        </template>
    </TemplateTodoList>
</template>

<style lang="scss" scoped></style>
