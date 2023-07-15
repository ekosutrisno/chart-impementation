/// <reference types="vite/client" />

import ApexCharts from 'apexcharts';

app.config.globalProperties.$apexcharts = ApexCharts;
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $apexcharts: typeof ApexCharts;
    }
}