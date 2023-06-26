<template>
    <div>
        <p v-for="test in tests" :key="test.id">ID: {{ test.id }} => {{ test.name }} -> {{ test.type }}</p>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "user",
    middleware: "auth"
})
</script>

<script>
export default {
  data () {
    return {
        tests: '',
    }
  },
  async mounted() {
    this.tests = await $fetch('http://localhost:5001/tests/full')
  }
}
</script>