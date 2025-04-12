<template>
  <div class="quiz-container">
    <h1 class="title">非遗知识答题</h1>
    <div
      v-for="(q, index) in questions"
      :key="q.id"
      class="question-box"
    >
      <p class="question-text">{{ index + 1 }}. {{ q.questionText }}</p>
      <div
        v-for="(text, key) in parseOptions(q.options)"
        :key="key"
        class="option"
      >
        <label>
          <!-- 多选题 -->
          <input
            v-if="q.type === '多选题'"
            type="checkbox"
            :name="'question_' + q.id + '_' + key"
            :value="key"
            v-model="userAnswers[q.id]"
          />
          <!-- 单选题 & 判断题 -->
          <input
            v-else
            type="radio"
            :name="'question_' + q.id"
            :value="key"
            v-model="userAnswers[q.id]"
          />
          <span>{{ key }}. {{ text }}</span>
        </label>
      </div>

      <div v-if="showResult">
        <p class="answer-result">
          你的答案：
          <span :class="q.isCorrect ? 'correct' : 'wrong'">
            {{ formatUserAnswer(userAnswers[q.id]) || '未作答' }}
            <span v-if="q.isCorrect">✔️</span>
            <span v-else>❌</span>
          </span>
        </p>
        <p>正确答案：{{ q.correctAnswer }}</p>
        <p>解析：{{ q.explanation }}</p>
      </div>
    </div>

    <div class="button-container">
      <button
        @click="handleButtonClick"
        class="submit-button"
      >
        {{ isSubmitted ? '查看排行榜' : '提交' }}
      </button>
      <button @click="loadQuestions" class="reload-button">换一组</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { jwtDecode } from 'jwt-decode';

export default {
  name: 'QuizPage',
  data () {
    return {
      questions: [],
      userAnswers: {},
      results: [],
      showResult: false,
      userId: '',
      isSubmitted: false // 新增状态标记，表示是否已提交答案
    }
  },
  mounted () {
    this.fetchUserIdFromToken()
    this.loadQuestions()
  },
  methods: {
    fetchUserIdFromToken () {
      const token = localStorage.getItem('token')
      if (token) {
        try {
          const decoded = jwtDecode(token)
          this.userId = decoded.claims.id || ''
        } catch (err) {
          console.error('jwt-decode 解析失败:', err)
        }
      } else {
        console.warn('未找到 token')
      }
    },
    parseOptions (jsonStr) {
      try {
        return JSON.parse(jsonStr)
      } catch (e) {
        console.error('选项解析失败:', jsonStr)
        return {}
      }
    },
    formatUserAnswer (val) {
      if (Array.isArray(val)) return val.sort().join(', ')
      return val
    },
    async loadQuestions () {
      try {
        const res = await axios.get('http://localhost:8081/questions/random')
        if (res.data.code === 1) {
          this.questions = res.data.data
          this.userAnswers = {}
          this.results = []
          this.showResult = false
          this.isSubmitted = false // 重置提交状态

          this.questions.forEach(q => {
            this.userAnswers[q.id] = q.type === '多选题' ? [] : ''
          })
        }
      } catch (err) {
        console.error('获取题目失败:', err)
      }
    },
    async submitAnswers () {
      const payload = this.questions.map(q => ({
        questionId: q.id,
        userAnswer: Array.isArray(this.userAnswers[q.id])
          ? this.userAnswers[q.id].sort().join(',')
          : this.userAnswers[q.id],
        userId: this.userId
      }))

      try {
        const res = await axios.post('http://localhost:8081/questions/submit', payload)
        if (res.data.code === 1) {
          this.results = res.data.data
          this.questions.forEach(q => {
            const result = this.results.find(r => r.id === q.id)
            if (result) {
              q.correctAnswer = result.correctAnswer
              q.isCorrect = result.isCorrect
              q.explanation = result.explanation
            }
          })
          this.showResult = true
          this.isSubmitted = true // 设置为已提交
        }
      } catch (err) {
        console.error('提交答案失败:', err)
      }
    },
    handleButtonClick() {
      if (this.isSubmitted) {
        // 在此处理查看排行榜的逻辑
        this.viewLeaderboard()
      } else {
        this.submitAnswers()
      }
    },
    async viewLeaderboard() {
      // 假设我们有一个接口来获取排行榜数据
      try {
        const res = await axios.get('http://localhost:8081/leaderboard')
        if (res.data.code === 1) {
          // 在这里处理显示排行榜的逻辑
          console.log(res.data.data)  // 打印排行榜数据
        }
      } catch (err) {
        console.error('获取排行榜失败:', err)
      }
    }
  }
}
</script>

<style scoped>
/* 页面背景 */
body {
  background: linear-gradient(to right, #ff7e5f, #feb47b); /* 渐变背景色 */
  font-family: 'Arial', sans-serif; /* 更现代的字体 */
}

/* 问题容器 */
.quiz-container {
  width: 70%;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9); /* 半透明白色背景 */
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px); /* 模糊背景 */
}

/* 标题样式 */
h1.title {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: #2a2a2a;
  margin-bottom: 30px;
  border-bottom: 3px solid #ff7e5f;
  padding-bottom: 10px;
}

/* 问题框样式 */
.question-box {
  border: 1px solid #f0f0f0;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: rgba(245, 245, 245, 0.9);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1); /* 增加阴影 */
}

/* 问题文本 */
.question-text {
  font-size: 18px;
  color: #333;
  margin-bottom: 12px;
}

/* 选项样式 */
.option {
  margin-left: 20px;
  margin-bottom: 8px;
}

.option input {
  margin-right: 10px;
}

/* 答案结果 */
.answer-result {
  font-size: 16px;
  margin-top: 15px;
}

.correct {
  color: #4caf50;
}

.wrong {
  color: #f44336;
}

/* 按钮容器 */
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

/* 提交和换一组按钮样式 */
.submit-button,
.reload-button {
  padding: 12px 30px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  border: 1px solid #e0e0e0;
  margin: 0 10px;
}

.submit-button {
  background-color: #ff9800;
  color: white;
}

.submit-button:hover {
  background-color: #019f43;
  transform: translateY(-2px);
}

.reload-button {
  background-color: #607d8b;
  color: white;
}

.reload-button:hover {
  background-color: #455a64;
  transform: translateY(-2px);
}
</style>
