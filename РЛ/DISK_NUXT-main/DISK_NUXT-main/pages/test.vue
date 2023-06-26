<template>
    <TheStartTest />
</template>

<script setup>
definePageMeta({
    pageTransition: {
    name: 'rotate'
  },
    layout: "user",
    middleware: "auth"
})
</script>