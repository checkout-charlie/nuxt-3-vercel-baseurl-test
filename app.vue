<script lang="ts" setup>
const counter = ref(0)
</script>
<template>
  <div>
    counter {{ counter }}
    <button @click="counter++">
      +
    </button>
  </div>
</template>
