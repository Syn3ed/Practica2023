import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import "vuetify/styles";
import { md2 } from 'vuetify/blueprints'


const myTheme: ThemeDefinition = {
    dark: true,
    colors: {
        primary: "grey-darken-4",
    }

}
export default defineNuxtPlugin(nuxtApp =>{
    const vuetify = createVuetify({
        blueprint: md2,
        components,
        directives,
        defaults: {
            /*VTextField: {
                variant: "outlined",
                color: "indigo-darken-4",
            }*/
        },
        /*theme: {
            defaultTheme: "myTheme",
            themes: {
                myTheme
            }
        }*/
    })
    nuxtApp.vueApp.use(vuetify)
})