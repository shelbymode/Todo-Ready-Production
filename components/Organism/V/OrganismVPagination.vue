<script setup lang="ts">
import { useOffsetPagination } from "@vueuse/core";

// function fetchData({ currentPage, currentPageSize }: { currentPage: number; currentPageSize: number }) {
//     fetch(currentPage, currentPageSize).then((responseData) => {
//         data.value = responseData;
//     });
// }

/* const { currentPage, currentPageSize, pageCount, isFirstPage, isLastPage, prev, next } = useOffsetPagination({
    total: database.value.length,
    page: 1,
    pageSize,
    onPageChange: fetchData,
    onPageSizeChange: fetchData,
}); */
</script>

<template>
    <div class="w-full flex items-center justify-between">
        <AtomPaginationSwitchPage icon="i-carbon-chevron-left"
            >Previous</AtomPaginationSwitchPage
        >
        <AtomPaginationElement v-for="el in 5" :key="el">
            {{ el }}
        </AtomPaginationElement>
        <AtomPaginationSwitchPage
            icon="i-carbon-chevron-right"
        ></AtomPaginationSwitchPage>
    </div>
</template>

<style lang="scss" scoped></style>
