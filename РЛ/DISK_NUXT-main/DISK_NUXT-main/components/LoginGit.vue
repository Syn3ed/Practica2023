<template>
  <div>
    <button
    class="flex items-center border border-gray-500 px-4 py-2 rounded-lg text-gray-500 text-sm font-medium"
    @click="signIn('github')"
  >
    Log in with Github
  </button>
  </div>
</template>

<script setup lang="ts">
const { signIn } = useAuth()
</script>

