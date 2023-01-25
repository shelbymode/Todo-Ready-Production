<script setup lang="ts">
import { TransitionGroup } from "vue";
import { INotification } from "~~/client/core/common/types";

const props = defineProps<{
    notifications: INotification[];
}>();
</script>

<template>
    <TemplateNotification>
        <TransitionGroup name="list-animation" mode="out-in">
            <MoleculeVNotification
                v-for="notification in props.notifications"
                :key="notification.id"
                ref="containerNotification"
                :notification="notification"
            />
        </TransitionGroup>
    </TemplateNotification>
</template>

<style lang="scss"></style>
