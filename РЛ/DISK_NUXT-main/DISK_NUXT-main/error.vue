<template>
    <v-app id="inspire">
        <v-main class="bg-grey-lighten-3">
            <v-container style="margin-left: auto; margin-right: auto; width: 40em; text-align: center; margin-top: 20%;">
                <div>
                    <h1>{{ error.statusCode }}</h1>
                    <p>Ooops</p>
                    <p>{{ error.message }}</p>
                    <NuxtLink to="/"><v-btn @click="handleClearError">На главную страницу</v-btn></NuxtLink>
                </div>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
defineProps(['error'])
const handleClearError = () => clearError({ redirect: '/' })
</script>