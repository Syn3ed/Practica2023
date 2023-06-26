<template>
  <div>
    <div class="test-page">
      <div class="column">
        <h3>Вопросы</h3>
        <div class="questions">
          <label class="lable" for="question1" id="label1">Вопрос 1</label>
          <label class="lable" for="question2" id="label2">Вопрос 2</label>
          <label class="lable" for="question3" id="label3">Вопрос 3</label>
          <label class="lable" for="question4" id="label4">Вопрос 4</label>
        </div>
      </div>
      <div class="column">
        <h3></h3>
        <div class="buttons">
          <button id="button1" class="button" @click="toggleButton('button1')"> 1</button>
          <button id="button2" class="button" @click="toggleButton('button2')"> 2</button>
          <button id="button3" class="button" @click="toggleButton('button3')"> 3</button>
          <button id="button4" class="button" @click="toggleButton('button4')"> 4</button>
        </div>
      </div>
      <div class="column">
        <h3></h3>
        <div class="buttons2">
          <button id="button5" class="button2" @click="toggleButton2('button5')"> 1</button>
          <button id="button6" class="button2" @click="toggleButton2('button6')"> 2</button>
          <button id="button7" class="button2" @click="toggleButton2('button7')"> 3</button>
          <button id="button8" class="button2" @click="toggleButton2('button8')"> 4</button>
        </div>
      </div>
    </div>
    <div class="extra-buttons">
      <button class="buttonStart" @click="startTest()">Начать тестирование</button>
      <button class="buttonNext" @click="goToNextQuestion()">Следующий вопрос</button>
      <button class="buttonNext" @click="goToNext()">goToNext</button>
    </div>
    <div class="file-container">
      <pre class="file-content">{{ fileContent }}</pre>
    </div>
  </div>

</template>

<script src="./test1.js"></script>

<style>

.test-page {
  display: flex;
  justify-content: space-between;
  background-color: #f2f2f2;
  padding: 20px;
}

.column {
  flex: 1;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

h3 {
  margin-bottom: 10px;
  color: #333;
}

.questions {
  flex: 1;
  margin-bottom: 20px;
}

.buttons,
.buttons2 {
  display: flex;
  flex-direction: column;
}

.button,
.button2,
.buttonStart,
.buttonNext {
  margin-bottom: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

label {
  display: block;
  margin-bottom: 4%;
  font-weight: bold;
}

.button:hover {
  background-color: #0056b3;
}

.extra-buttons {
  margin-top: 20px;
}

.extra-buttons .button {
  margin-right: 10px;
}

.button:disabled,
.buttonStart:disabled,
.button2:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.button.selected {
  background-color: red;
}

.button2.selected2 {
  background-color: red;
}
</style>
