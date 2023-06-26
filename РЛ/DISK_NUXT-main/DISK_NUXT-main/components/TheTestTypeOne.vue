<template>
    <section class="quiz" v-if="!quizCompleted">
        <div>
            <span class="question">{{ getCurrentQuestion.question }}</span>
        </div>
        <div class="options">
            <label v-for="(option, index) in getCurrentQuestion.options" :key="index" :for="'option' + index" :class="`option ${getCurrentQuestion.selected == index
                ? index == getCurrentQuestion.answer
                    ? 'correct'
                    : 'wrong'
                : ''
                } ${getCurrentQuestion.selected != null &&
                    index != getCurrentQuestion.selected
                    ? 'disabled'
                    : ''
                }`">
                <div class="form-radio-hidden">

                    <v-btn :id="'option' + index" :name="getCurrentQuestion.index" :value="index"
                        v-model="getCurrentQuestion.selected" @change="SetAnswer">1</v-btn>
                    <span class="radio"></span><span class="text">{{ option }}</span>
                </div>
            </label>

        </div>
        <div style="display: flex">
            <div>
                <p>Энтузиаст </p>
                <p>смелый </p>
                <p>дипломатичный</p>
                <p>удовлетворенный</p>
            </div>
            <div>
                <div style="display: flex">
                    <v-btn :id="'option' + index" :name="getCurrentQuestion.index" :value="index"
                        v-model="getCurrentQuestion.selected" @change="SetAnswer">1</v-btn>
                        <span class="radio"></span><span class="text">{{ option }}</span>
                    <v-btn>1</v-btn>
                </div>

                <div style="display: flex">
                    <v-btn>2</v-btn>
                    <v-btn>2</v-btn>
                </div>
                <div style="display: flex">
                    <v-btn>3</v-btn>
                    <v-btn>3</v-btn>
                </div>
                <div style="display: flex">
                    <v-btn>4</v-btn>
                    <v-btn>4</v-btn>
                </div>
            </div>
        </div>


        <my-button style="margin-bottom: 100px;" @click="NextQuestion" :disabled="!getCurrentQuestion.selected">
            {{
                getCurrentQuestion.index == questions.length - 1
                ? 'Завершить тест'
                : getCurrentQuestion.selected == null
                    ? 'Выберите ответ'
                    : 'Следующий вопрос'
            }}
        </my-button>



    </section>

    <section v-else class="end">
        <h2 style="margin: 30px 0 30px 0;">Вы завершили квиз</h2>
        <h3 style="font-size: 30px; margin-bottom: 50px;">Количество правильных ответов: {{ score }}/{{ questions.length
        }}</h3>

    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
const questions = ref([
    {
        question: 'Энтузиаст',
        answer: 0,
        options: [
            '/',
            '/',
        ],
        selected: null
    },
    {
        question: 'Оптимистичный',
        answer: 2,
        options: [
            '/',
            '/',
        ],
        selected: null
    },
    {
        question: 'Уважительный',
        answer: 1,
        options: [
            '/',
            '/',
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