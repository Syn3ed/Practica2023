<template>
    <div class="register-container">
      <div class="register-heading"> 
        <h1>Регистрация</h1>    
      </div>
      <div class="register-form">
        <label for="name">Имя:</label>
        <input type="text" id="name" v-model="name" required>
        
        <label for="surname">Фамилия:</label>
        <input type="text" id="surname" v-model="surname" required>
  
        <label for="secondname">Отчество:</label>
        <input type="text" id="secondname" v-model="secondname" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
        
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password" required>
        
        <label for="confirmPassword">Повторите пароль:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required>
        
        <button type="btn" @click="redirectToLogin">Зарегистрироваться</button>
      </div>
    </div>
  </template>
  
  <script src="./register.js"></script>
  
  <style scoped src="./register-form.css"></style>
  
