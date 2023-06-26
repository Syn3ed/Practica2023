<template>
    <div class="file-container">
      <pre class="file-content">{{ fileContent }}</pre>
    </div>
  </template>

  <style>
  .file-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    background-color: #f2f2f2;
  }

  .file-content {
    font-family: 'Times New Roman', Times, serif, sans-serif;
    text-align: justify;
    font-size: 18px;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    line-height: 1.5;
  }
  </style>

  <script src="./test1.js"></script>
