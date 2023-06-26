<template>
    <div class="login-container">
      <div class="login-heading">
        <h1>Вход</h1>
      </div>
      <div class="login-form">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
        
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password" required>
        
        <button type="submit" @click="handleLogin">Войти</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      handleLogin() {
        // Здесь вы можете обработать отправку данных на сервер для проверки входа
        console.log('Email:', this.email);
        console.log('Пароль:', this.password);
        
        // Перенаправление на другую страницу после успешного входа
        this.$router.push('/test1');
      }
    }
  };
  </script>
  
  <style src="./login.css"></style>