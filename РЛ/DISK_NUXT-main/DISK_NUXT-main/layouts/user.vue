<template>
    <v-app id="inspire">
        <v-app-bar class="px-8" color="white" flat density="compact">
            <NuxtLink class="DISK" to="/">DISK</NuxtLink>
            <v-spacer></v-spacer>
            <v-tabs centered color="grey-darken-2">
                <ul>
                    <li>
                        <NuxtLink to="/test">
                            <v-tab>
                                Test
                            </v-tab>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/second">
                            <v-tab>
                                Second
                            </v-tab>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/dictionary">
                            <v-tab>
                                Словарь
                            </v-tab>
                        </NuxtLink>
                    </li>
                </ul>
            </v-tabs>
            <v-spacer></v-spacer>
                 
                <v-avatar class="hidden-sm-and-down" color="grey-darken-1" size="32"></v-avatar>        
        </v-app-bar>
        <v-main class="bg-grey-lighten-3">
            <v-container class="d-flex justify-center align-center text-h5" style="min-height: 300px;">
                <div>
                    <NuxtPage />
                </div>
            </v-container>
        </v-main>
    </v-app>
</template>
    
<script setup>

</script>