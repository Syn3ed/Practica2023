<template>
    <div style="display:flex">
        <div>
            <h3 v-for="question in questions" :key="question.id"> {{ question.text }} </h3>
        </div>
        <v-radio-group v-model="inline" inline>
            <v-radio label="Согласен" value="1"></v-radio>
            <v-radio label="Не согласен" value="2"></v-radio>
            <v-radio label="Не знаю" value="3"></v-radio>
        </v-radio-group>

    </div>
    <hr>
</template>

<script>
export default {
    data() {
        return {
            questions: '',
            column: null,
            inline: null,
        }
    },
    async mounted() {
        this.questions = await $fetch('http://localhost:5001/tests/question/full')
    },
}
</script>