<template>
    <div class="bg-white flex flex-col shadow-sm rounded-md h-48 overflow-hidden">
        <div class="h-1/3 p-4 text-left flex flex-col space-y-1">
            <p class="font-medium text-gray-400">Total Orders</p>
            <h1 class="text-xl font-semibold text-gray-700">${{ total.toLocaleString() }}</h1>
        </div>
        <div class="pt-5">
            <apexchart class="text-gray-400" :options="options.chartOptions" :series="options.series" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ curve: string, color: string }>();
const data = ref<number[]>([]);
const total = ref<number>(0);

function randomizeArray(length: number): number[] {
    const arr: number[] = Array.from({ length }, () => Math.floor(Math.random() * (15 - 10 + 1)) + 10);
    return arr;
}

setInterval(() => {
    data.value = randomizeArray(24);
    total.value = data.value.reduce((total, num) => total + num, 0);
}, 2000);


const options = ref({
    series: [
        {
            name: "Desktops",
            data: data
        }
    ],
    chartOptions: {
        colors: [props.color],
        chart: {
            type: 'area',
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: props.curve,
            width: 2
        },
        fill: {
            opacity: 0.3
        },
        xaxis: {
            crosshairs: {
                width: 1
            },
        },
        yaxis: {
            min: 0
        }
    }
});

</script>