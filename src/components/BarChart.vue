<template>
    <div class="bg-white shadow-sm py-6 h-max rounded-md">
        <div class="px-6 text-left flex flex-col space-y-1">
            <p class="font-medium text-gray-400">Mobile Apps Download</p>
            <h1 class="text-4xl font-semibold text-gray-700">25183</h1>
            <span class="text-sm text-gray-500">Total Download</span>
        </div>
        <div class="pl-2 -mt-2">
            <apexchart class="text-gray-400 w-full" :type="type" :options="options.chartOptions" :series="options.series" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineProps<{ type: string }>();

const options = ref({
    chartOptions: {
        chart: {
            toolbar: {
                show: false
            }
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
    },
    series: [
        {
            name: "series-1",
            data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
    ],
});
</script>