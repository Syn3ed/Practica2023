<template>
  <v-app id="inspire">
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <div>
          <TheReg />
        </div>
        <NuxtLink to="/admin">admin</NuxtLink>
        <NuxtLink to="/user">user</NuxtLink>
        <NuxtLink to="/LOGINGIT">LOGINGIT</NuxtLink>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import { useTheme } from 'vuetify'
/*export default {
  setup () {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'dark' : 'light'
    }
  }
}*/
</script>

