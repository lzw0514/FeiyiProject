<template>
    <div class="chat-container">
      <h1 class="title">非遗 · 智能问答</h1>
  
      <div class="input-area">
        <input
          v-model="prompt"
          placeholder="请输入你的问题，例如：我国的非遗种类有哪些？"
          @keyup.enter="ask"
          class="prompt-input"
        />
        <button @click="ask" class="send-button">发送</button>
      </div>
  
      <div v-if="htmlResponse" class="response-card" v-html="htmlResponse"></div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  
  const prompt = ref('')
  const htmlResponse = ref('')
  
  // 自动格式化模型返回内容为 HTML
  function formatTextToHtml(text) {
    if (!text) return ''
  
    const lines = text.split('\n').map(line => line.trim()).filter(line => line)
  
    let result = ''
    lines.forEach(line => {
      const match = line.match(/^\d+\.\s*(.*)/)
      if (match) {
        result += `<li>${match[1]}</li>`
      } else {
        result += `<p>${line}</p>`
      }
    })
  
    // 自动包裹 ul
    if (result.includes('<li>')) {
      result = result.replace(/(<li>.*<\/li>)+/gs, match => `<ul>${match}</ul>`)
    }
  
    return result
  }
  
  const ask = async () => {
    try {
      const res = await axios.get('/api/qwen/chat', {
        params: { prompt: prompt.value }
      })
      htmlResponse.value = formatTextToHtml(res.data)
    } catch (error) {
      htmlResponse.value = '<p style="color: red;">请求失败，请检查接口</p>'
    }
  }
  </script>
  
  <style scoped>
  .chat-container {
    max-width: 100%;
    margin: 40px auto;
    padding: 60px;
    background: #ffffff;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    text-align: center;
    font-family: "Helvetica Neue", sans-serif;
  }
  
  .title {
    font-size: 32px;
    color: #2c3e50;
    font-weight: bold;
    margin-bottom: 30px;
  }
  
  .input-area {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-bottom: 30px;
    flex-wrap: wrap;
  }
  
  .prompt-input {
    flex: 1;
    min-width: 600px;
    padding: 14px 18px;
    border: 1px solid #ddd;
    border-radius: 12px;
    font-size: 18px;
    outline: none;
    transition: all 0.3s ease;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
    background-color: #f9f9f9;
  }
  
  .prompt-input:focus {
    border-color: #3498db;
    box-shadow: 0 0 8px rgba(52, 152, 219, 0.5);
  }
  
  .send-button {
    padding: 14px 24px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 18px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
  }
  
  .send-button:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }
  
  .response-card {
    background-color: #ecf0f1;
    padding: 25px;
    border-radius: 12px;
    text-align: left;
    font-size: 18px;
    line-height: 1.7;
    color: #34495e;
    max-height: 400px;
    overflow-y: auto;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  
  .response-card ul {
    padding-left: 20px;
    margin-top: 10px;
    list-style-type: disc;
  }
  
  .response-card li {
    margin-bottom: 8px;
    line-height: 1.6;
  }
  
  .response-card p {
    margin-bottom: 12px;
  }
  
  </style>
  