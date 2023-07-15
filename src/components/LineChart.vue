<template>
    <div class="bg-white shadow-sm py-6 rounded-md">
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
    series: [
        {
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 3, 111, 231]
        },
        {
            name: "Mobile",
            data: [20, 61, 55, 71, 69, 82, 89, 111, 168, 13, 121, 251]
        },
        {
            name: "Web",
            data: [30, 81, 75, 91, 89, 102, 109, 131, 188, 23, 131, 271]
        }
    ],
    chartOptions: {
        colors: ['#8B5CF6', '#ec4899'],
        chart: {
            toolbar: false,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        }
    }
});
</script>