<template>
  <div class="welcome-container">
    <div class="welcome-heading">
      <h1>Добро пожаловать!</h1>
    </div>
    <div class="welcome-form">
      <label for="vhod">У вас уже есть аккаунт?</label>
      <button class="btn" @click="redirectToLogin">Войти</button>

      <label for="reg">Нет аккаунт?</label>
      <button class="btn" @click="redirectToRegister">Зарегистрироваться</button>
    </div>
  </div>
</template>
<script src="./router.js"></script>

<style src="./welcome.css"></style>
