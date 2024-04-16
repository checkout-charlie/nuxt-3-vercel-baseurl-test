<script lang="ts" setup>
const counter = ref(0)
const isClient = ref(false)
onMounted(() => {
  isClient.value = true
})
</script>
<template>
  <div>
    counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
  </div>
  <div>
    client script executed: {{ isClient }}
  </div>
</template>
