<template>
  <div class="min-h-screen grid md:grid-cols-2 gap-2 bg-[#f1f5f9] box-border p-4">
    <LineChart type="area"/>
    <div class="grid grid-cols-2 gap-4">
      <SparkChart curve="smooth" color="#14b8a6"/>
      <SparkChart curve="smooth" color="#8B5CF6"/>
      <SparkChart curve="smooth" color="#ec4899"/>
      <SparkChart curve="smooth" color="#facc14"/>
      <SparkChart curve="smooth" color="#cc257b"/>
      <SparkChart curve="smooth" color="#0ba5e9"/>
    </div>
    <LineChart type="scatter"/>
    <BarChart type="bar"/>
  </div>
</template>

<script setup lang="ts">
import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart.vue';
import SparkChart from './components/SparkChart.vue';

</script>