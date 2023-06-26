<template>
    <v-card class="mx-auto" max-width="400" title="Регистрация">
        <v-container>
            <v-text-field v-model="first" color="primary" label="Имя" variant="underlined"></v-text-field>

            <v-text-field v-model="last" color="primary" label="Фамилия" variant="underlined"></v-text-field>

            <v-text-field v-model="email" color="primary" label="Email" variant="underlined"></v-text-field>

            <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Пароль"
                hint="Минимум 8 символов" counter @click:append="show1 = !show1" variant="underlined"></v-text-field>

            <!--<v-text-field v-model="password" color="primary" label="Пароль" placeholder="Enter your password"
                variant="underlined"></v-text-field>-->

           <p>Уже зарегистрированны в системе?</p>
            <NuxtLink to="/login">Войти</NuxtLink>
        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <NuxtLink to="/login">
            <v-btn @submit.prevent="submit"  color="deep-purple-darken-2">
                Зарегистрироваться
                <v-icon icon="mdi-chevron-right" end></v-icon>
            </v-btn>
            </NuxtLink>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    setup() {
        const data = reactive({
        first: '',
        last: '',
        email: '',
        password: '',
        });
        const submit = () => {
            console.log(123);
        }
        
    },

    data() {
        return {
            show1: false,
            show2: true,
            password: '',
            rules: {
                required: value => !!value || 'Символы',
                min: v => v.length >= 8 || 'Минимум 8 символов',
                emailMatch: () => (`The email and password you entered don't match`),
            },
        }
    },
}
    /*created() {
      this.load()
      // this.getOne()
      },
      methods: {
      load(){
      // new td = new Transport()
      axios.get(`${server.baseURL}/compliet-cargo/TS`).then(data => (this.ts = data.data))
      console.log(ts)
      },
    },
*/
</script>