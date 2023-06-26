<template>
    <section class="quiz" v-if="!quizCompleted">
        <div style="display:flex">
            <div>
                <!--<span v-for="question in questions2" :key="question.id">ID: {{ question.id }} => {{ question.testId }} => {{ question.text }}</span>-->
                <h3 v-for="question in questions2" :key="question.id"> {{ question.text }}
                </h3>

                <span class="question">{{ getCurrentQuestion.question }}</span>
            </div>
            <v-radio-group v-model="inline" inline>>
                <v-radio label="Согласен" value="1"></v-radio>
                <v-radio label="Не согласен" value="2"></v-radio>
                <v-radio label="Не знаю" value="3"></v-radio>
            </v-radio-group>
            <div class="options">
                <label v-for="(option, index) in getCurrentQuestion.options" :key="index" :for="'option' + index" :class="`option ${getCurrentQuestion.selected == index
                    ? index == getCurrentQuestion.order
                        ? 'correct'
                        : 'wrong'
                    : ''
                    } ${getCurrentQuestion.selected != null &&
                        index != getCurrentQuestion.selected
                        ? 'disabled'
                        : ''
                    }`">
                    <div class="form-radio-hidden">
                        <div style="display:flex">
                            <input type="radio" :id="'option' + index" :name="getCurrentQuestion.index" :value="index"
                                v-model="getCurrentQuestion.selected" @change="SetAnswer" />
                            <span class="radio"></span><span class="text">{{ option }}</span>
                        </div>
                    </div>
                </label>
            </div>
        </div>

        <v-btn style="margin-bottom: 100px;" @click="NextQuestion" :disabled="!getCurrentQuestion.selected">
            {{
                getCurrentQuestion.index == questions.length - 1
                ? 'Завершить тест'
                : getCurrentQuestion.selected == null
                    ? 'Выберите ответ'
                    : 'Следующий вопрос'
            }}
        </v-btn>
    </section>

    <section v-else class="end">
        <h2 style="margin: 30px 0 30px 0;">Вы завершили тест</h2>
        <!--<h3 style="font-size: 30px; margin-bottom: 50px;">Количество правильных ответов: {{ score }}/{{ questions.length}}</h3>-->
    </section>
</template>


<script>
export default {
    data() {
        return {
            questions2: '',
        }
    },
    async mounted() {
        this.questions2 = await $fetch('http://localhost:5001/tests/question/full')
    },
}
</script>

<script setup>
import { ref, computed } from 'vue'
const questions = ref([
    {
        question: 'Склонный к уединению',
        order: 0,
        options: [
            'Согласен',
            'Не согласен',
            'Не знаю'
        ],
        selected: null
    },
    {
        question: 'Управляемый',
        answer: 2,
        options: [
            'Согласен',
            'Не согласен',
            'Не знаю'
        ],
        selected: null
    }
])
const quizCompleted = ref(false)
const currentQuestion = ref(0)
const score = computed(() => {
    let value = 0
    questions.value.map(q => {
        if (q.selected != null && q.answer == q.selected) {
            console.log('correct');
            value++
        }
    })
    return value
})
const getCurrentQuestion = computed(() => {
    let question = questions.value[currentQuestion.value]
    question.index = currentQuestion.value
    return question
})
const SetAnswer = (e) => {
    questions.value[currentQuestion.value].selected = e.target.value
    e.target.value = null
}
const NextQuestion = () => {
    if (currentQuestion.value < questions.value.length - 1) {
        currentQuestion.value++
        return
    }
    quizCompleted.value = true
}
</script>