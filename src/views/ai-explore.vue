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
    const res = await axios.get('http://localhost:8081/api/qwen/chat', {
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
  max-width: 600px;
  margin: 80px auto;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  text-align: center;
  font-family: "Helvetica Neue", sans-serif;
}

.title {
  font-size: 28px;
  color: #333;
  margin-bottom: 24px;
}

.input-area {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.prompt-input {
  flex: 1;
  min-width: 250px;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
}

.prompt-input:focus {
  border-color: #409eff;
  box-shadow: 0 0 5px rgba(64, 158, 255, 0.5);
}

.send-button {
  padding: 12px 20px;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.send-button:hover {
  background-color: #66b1ff;
}

.response-card {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 12px;
  text-align: left;
  font-size: 16px;
  line-height: 1.8;
  color: #444;
}

.response-card ul {
  padding-left: 20px;
  margin-top: 10px;
}

.response-card li {
  margin-bottom: 6px;
}
</style>
